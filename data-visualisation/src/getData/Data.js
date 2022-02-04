import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENT_DATA } from "../fmd/query";

function Data() {
  const { data } = useQuery(
    GET_EVENT_DATA
    //   , {
    //   pollInterval: 500,
    // }
  );
  console.log(data);

  let coordinatesList = [];

  return (
    <div>
      {data === undefined ? (
        <p>Error</p>
      ) : (
        <div>
          {data.match.ballLocation.map((event, i) => {
            if (event.eventType === "FREE_KICK") {
              coordinatesList.push({
                x: event.coordinates.x,
                y: event.coordinates.y,
              });
            }
            console.log(coordinatesList);

            return (
              <p key={i}>
                {/* {event.eventType.toLowerCase()}{" "}
                {event.association.toLowerCase()} ({event.coordinates.x}
                {", "}
                {event.coordinates.y}) */}
              </p>
            );
          })}
        </div>
      )}{" "}
    </div>
  );
}

export default Data;
