import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENT_DATA } from "../fmd/query";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Data() {
  const { data } = useQuery(
    GET_EVENT_DATA
    //   , {
    //   pollInterval: 500,
    // }
  );

  let coordinatesListHome = [];
  let coordinatesListAway = [];

  if (data) {
    console.log(data);
    data.match.ballLocation.map((event) => {
      if (event.eventType === "FREE_KICK" && event.association === "HOME") {
        coordinatesListHome.push({
          x: event.coordinates.x,
          y: event.coordinates.y,
          time: event.clockTime,
        });
      }
      if (event.eventType === "FREE_KICK" && event.association === "AWAY") {
        coordinatesListAway.push({
          x: event.coordinates.x,
          y: event.coordinates.y,
          time: event.clockTime,
        });
      }
    });

    console.log(coordinatesListHome);
    console.log(coordinatesListAway);
  }

  return (
    <div className="graph">
      <ScatterChart
        class="graph"
        width={470}
        height={270}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        {" "}
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="x" unit="" tick={false} />
        <YAxis type="number" dataKey="y" name="y" unit="" tick={false} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter
          name="Home free kicks"
          data={coordinatesListHome}
          fill="pink"
        />
        <Scatter
          name="Home free kicks"
          data={coordinatesListAway}
          fill="orange"
        />
      </ScatterChart>
    </div>
  );
}

export default Data;
