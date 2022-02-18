import { useQuery } from "@apollo/client";
import { GET_EVENT_DATA } from "./query";

export default function getEventData(eventType) {
  const { data } = useQuery(GET_EVENT_DATA);

  let coordinatesList = [];

  if (data) {
    data.match.ballLocation.map((event) => {
      if (event.eventType === eventType) {
        coordinatesList.push({
          x: event.coordinates.x,
          y: event.coordinates.y,
          side: event.association,
        });
      }
    });
  }

  return coordinatesList;
}
