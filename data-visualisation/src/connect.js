import { io } from "socket.io-client";

const socket = io(
  "wss://2.push.test4.skybet.com:8443/socket.io/?EIO=3&transport=websocket"
);

socket.on("message", (data) => {
  console.log(data);
});
