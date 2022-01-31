import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENT_DATA } from "../gql/Query";

function Data() {
  const { data } = useQuery(GET_EVENT_DATA);
  console.log(data);

  return (
    <div>
      {data === undefined ? (
        <p>Error</p>
      ) : (
        <div style={{ textAlign: "center" }}>
          {data.match.ballLocation.map((event, i) => {
            return (
              <p key={i}>
                {event.eventType.toLowerCase()}{" "}
                {event.association.toLowerCase()} ({event.coordinates.x}
                {", "}
                {event.coordinates.y})
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Data;
