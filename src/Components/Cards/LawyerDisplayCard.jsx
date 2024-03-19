import { Call, Email, LocationCityOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { number } from "prop-types";
import React from "react";

const LawyerDisplayCard = ({
  name,
  image,
  location,
  email,
  position,
  phoneNumber,
  Image,
}) => {
  return (
    <div
      className="md:w-[100%] md:h-[100%] md:flex md:flex-col md:gap-[1em]  sm:w-[100%] sm:h-[100%] sm:flex sm:flex-col sm:gap-[1em]"
      style={{
        // width: "100%",
        // height: "100%",
        // display: "flex",
        // flexDirection: "column",
        // gap: "1em",
        background: "rgb(213, 207, 207)",
      }}
    >
      <div
        className="md:w-[27vw] md:h-[40vh] sm:w-[100%] sm:h-[40vh]"
        style={{
          // width: "27vw",
          // height: "40vh",
          background: "black",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "start",
          gap: ".5em",
          flexDirection: "column",
          paddingLeft: "5%",
        }}
      >
        <div> {name?.toUpperCase()} </div>
        <small> {position} </small>
      </div>
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          gap: ".5em",
        }}
      >
        <div>
          <IconButton>
            {" "}
            <LocationCityOutlined />
          </IconButton>
        </div>
        <div>{location}</div>
      </div>
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          gap: ".5em",
        }}
      >
        <div>
          <IconButton>
            {" "}
            <Call />
          </IconButton>
        </div>
        <div>{phoneNumber}</div>
      </div>
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          gap: ".5em",
        }}
      >
        <div>
          <IconButton>
            {" "}
            <Email />
          </IconButton>
        </div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default LawyerDisplayCard;
