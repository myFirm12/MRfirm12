import { IconButton } from "@mui/material";
import React from "react";

function BoxOfContacts({ icons, head, num, gmail, gmailP }) {
  return (
    <>
      <div
        className="md:w-[40%] md:h-[40%] md:flex md:flex-col   sm:w-[40%] sm:h-[60%] sm:flex sm:flex-col"
        style={{
          // width: "40%",
          // height: "40%",
          // background: "wheat",
          // display: "flex",
          // flexDirection: "column",
          border: ".1px solid rgb(73, 71, 71)",
        }}
      >
        {/* ICONS */}
        <div
          className="md:basis-[40%] md:flex md:justify-center md:items-center    sm:basis-[40%] sm:flex sm:justify-center sm:items-center"
          style={
            {
              // flex: ".4",
              // background: "red",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }
          }
        >
          <IconButton style={{ border: "1px solid rgb(73, 71, 71)" }}>
            {icons}
          </IconButton>
        </div>

        {/* CONTENTS */}
        <div
          className="md:basis-[60%] sm:basis-[60%]"
          // style={{ flex: ".6" }}
        >
          <div
            className="md:gap-[1em] sm:gap-[.5em] md:flex md:justify-center md:items-center md:flex-col   sm:gap-[1em] sm:gap-[.5em] sm:flex sm:justify-center sm:items-center sm:flex-col"
            style={
              {
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                // gap: "1em",
              }
            }
          >
            <div
              className="md:text-[15px] sm:text-[10px]"
              style={{ color: "rgb(161, 131, 74)" }}
            >
              {" "}
              {head}
            </div>{" "}
            <p className="md:text-[15px] sm:text-[10px]"> {num}</p>{" "}
            <p className="md:text-[15px] sm:text-[10px]">{gmail}</p>{" "}
            <p className="md:text-[15px] sm:text-[10px]">{gmailP}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxOfContacts;
