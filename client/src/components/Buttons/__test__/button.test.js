import React from "react";
import ReactDOM from "react-dom";
import CreateButton from "../CreateButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateButton link={"/"} title="hi"></CreateButton>, div);
});
