import { useQuery } from "@apollo/client";
import { GET_EVENT_DATA } from "./query";

export default function getEventData(eventType, side) {
  const { data } = useQuery(GET_EVENT_DATA);

  let coordinatesList = [];

  if (data) {
    data.match.ballLocation.map((event) => {
      if (event.eventType === eventType && event.association === side) {
        const timestamp = Math.round(event.clockTime / 60);
        coordinatesList.push({
          x: event.coordinates.x,
          y: event.coordinates.y,
          time: timestamp,
        });
      }
    });
  }

  return coordinatesList;
}
