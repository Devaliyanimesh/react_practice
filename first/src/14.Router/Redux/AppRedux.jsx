import React from "react";
import Count from "../UI/Count/Count";
import { Provider } from "react-redux";
import storee from "../Redux/App/store";
export default function AppRedux() {
  return (
    <div>

    <Provider store={storee}>
      <Count />
    </Provider>
    </div>
  );
}
