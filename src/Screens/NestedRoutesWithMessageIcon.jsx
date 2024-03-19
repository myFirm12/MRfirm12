import { Message } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedRoutesWithMessageIcon = () => {
  return (
    <div>
      <div
        className="md:top-[70vh] md:left-[90%] sm:bottom-[2vh] sm:right-[5vw] "
        style={{
          // background: "red",
          position: "fixed",

          // width: "15vw",
          // height: "20vh",
          // top: "70vh",
          zIndex: "100",
          // left: "90%",
        }}
      >
        <Link to="/messages" style={{ textDecoration: "none", color: "white" }}>
          <IconButton
            style={{
              background: "rgb(230, 225, 225)",
              color: "rgb(28, 28, 143)",
            }}
          >
            {" "}
            <Message sx={{ fontSize: "40px" }} />{" "}
          </IconButton>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default NestedRoutesWithMessageIcon;
