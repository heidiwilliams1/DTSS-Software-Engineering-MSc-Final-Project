import { gql } from "@apollo/client";

export const GET_EVENT_DATA = gql`
  query FMD {
    match(matchCid: "runningball-adaptor-dd4bd98") {
      ballLocation @order(by: "clockTime", direction: ASC) {
        eventType
        association
        clockTime
        coordinates {
          x
          y
        }
      }
    }
  }
`;
