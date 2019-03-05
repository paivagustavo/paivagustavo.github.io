import React from "react";
import ReactDOM from "react-dom";
import Resume from "./js/Resume";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Resume />, div);
  ReactDOM.unmountComponentAtNode(div);
});
