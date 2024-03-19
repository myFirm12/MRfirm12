import { Divider, IconButton } from "@mui/material";
import React from "react";

function UnderlinedText({ name, icon }) {
  return (
    <>
      <div
        className="md:flex md:flex-col md:w-[60%] md:gap-[.1em]    sm:flex sm:flex-col sm:w-[90%] sm:gap-[.1em]"
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // width: "60%",
            // gap: ".1em",
          }
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>{name}</div>
          <div>
            <IconButton>{icon}</IconButton>
          </div>
        </div>

        <Divider
          className="md:w-[80%] sm:w-[100%]"
          sx={{ background: "white" }}
        />
      </div>
    </>
  );
}

export default UnderlinedText;
