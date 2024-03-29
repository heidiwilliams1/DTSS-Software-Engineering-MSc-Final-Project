import io from "socket.io-client";
import MessageParser from "./MessageParser";

class Push {
  socket;
  messageParser;
  eventId;

  constructor(eventId) {
    this.eventId = eventId;
    this.messageParser = new MessageParser();

    this.socket = io("wss://2.push.test4.skybet.com:8443/", {
      secure: true,
      forceNew: true,
      transports: ["websocket"],
    });

    this.socket.on("push", (data) => {
      const message = this.messageParser.parseMessage(data);
      console.log(message);
    });

    this.socket.on("connect", () => {
      console.log("Connected...");
      this.subscribe();
    });

    this.socket.on("disconnect", () => {
      console.log("...Disconnected");
      this.handleDisconnect();
    });
  }

  // Ball Location includes offsides and free kicks
  subscribe = () => {
    console.log(`Subscribing to event: ${this.eventId}`);
    this.socket.emit("subscribe", {
      keys: [
        `${this.eventId}.BallLocation`,
        `${this.eventId}.RedCard`,
        `${this.eventId}.YellowCard`,
      ],
      url: `/football/football-live/event/${this.eventId}`,
    });
  };

  handleDisconnect = () => {
    console.error("Socket Disconnected");
  };
}

export default Push;
