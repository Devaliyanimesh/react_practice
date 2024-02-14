import React from "react";
import Count from "../Count/Count";
import { Provider } from "react-redux";
import stroee from "./../../App/Store/store";
export default function Reduxx() {
  return (
    <div>
      <Provider store={stroee}>
        <Count />
      </Provider>
    </div>
  );
}
