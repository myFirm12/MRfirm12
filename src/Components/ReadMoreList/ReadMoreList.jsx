import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ReadMoreList({
  date,
  head,
  headparagraph,
  content1,
  content2,
  divider,
  Readmore,
  handleRead,
}) {
  return (
    <>
      <div
        className="md:flex md:flex-col md:justify-start md:gap-[1em]   sm:flex sm:flex-col sm:justify-start sm:gap-[1em]"
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // gap: "1em",
            //   padding: "10%",
            // justifyContent: "start",
            //   alignItems: "start",
          }
        }
      >
        <small style={{ color: "rgb(112, 97, 78)" }}>{date}</small>
        <div
          className="md:text-[20px] sm:text-[10px]"
          style={{ fontWeight: "bold", color: "white" }}
        >
          {head}{" "}
          <p className="md:text-[15px] sm:text-[12px]"> {headparagraph}</p>{" "}
        </div>
        <div
          style={{ color: "white" }}
          className="md:text-[15px] sm:text-[12px]"
        >
          {content1}
          <br /> {content2}
        </div>
        {/* <Link
          to="/Could_tighter_restrictions_mean_home_moves_has_to_stop"
          style={{ textDecoration: "none", color: "white" }}
        > */}
        <div
          onClick={handleRead}
          style={{
            color: "white",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          className="md:text-[15px] sm:text-[8px]"
        >
          {Readmore}
        </div>
        {/* </Link> */}
        <div>{divider}</div>
      </div>
    </>
  );
}

export default ReadMoreList;
