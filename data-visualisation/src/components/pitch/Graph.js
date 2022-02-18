import React, { useEffect } from "react";
import PropTypes from "prop-types";
import getEventData from "../../fmd/getData";
import Push from "../../push/Push";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ZAxis,
} from "recharts";

function Graph(props) {
  useEffect(() => {
    new Push("10be28ef-f8e1-4927-94e0-4b9f12e38825");
  }, []);

  const homeData = getEventData(props.eventType, "HOME");
  const awayData = getEventData(props.eventType, "AWAY");

  return (
    <div className="graph" data-testid="graph">
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
        <ZAxis type="number" dataKey="time" name="time" unit="'" tick={false} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Home Data" data={homeData} fill="orange" />
        <Scatter name="Away Data" data={awayData} fill="pink" />
      </ScatterChart>
    </div>
  );
}

Graph.propTypes = {
  eventType: PropTypes.string,
};

export default Graph;
