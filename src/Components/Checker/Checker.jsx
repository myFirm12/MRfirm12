import { CheckBox, CheckBoxRounded } from "@mui/icons-material";
import React from "react";

function Checker({ item }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: ".5em" }}>
        <div>
          {" "}
          <CheckBoxRounded />{" "}
        </div>
        <div>{item}</div>
      </div>
    </>
  );
}

export default Checker;
