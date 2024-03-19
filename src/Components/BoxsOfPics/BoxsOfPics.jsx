import { Divider } from "@mui/material";
import React from "react";
import BasicModal from "../Modal/BasicModal";

function BoxsOfPics({
  Image,
  view,
  name,
  director1,
  director,
  names,
  content,
  image,
  content2,
}) {
  return (
    <>
      <div
        className="md:w-[100%] md:h-[35vh] md:flex md:flex-col md:bg-cover md:bg-center   sm:w-[100%] sm:h-[40vh] sm:flex sm:flex-col sm:bg-cover sm:bg-center "
        style={{
          // width: "15vw",
          // height: "70%",
          // background: "#ADD8E6 ",
          backgroundImage: `url(${Image})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // display: "flex",
          // flexDirection: "column",
          // gap: "1em",
          // backgroundRepeat:"no-repeat"
        }}
      >
        <div
          style={
            {
              // display: "flex",
              // flexDirection: "column",
              // gap: "3em",
              // background: "rgba(0, 0, 255, 0.3)",
              // justifyContent: "center",
              // width: "100%",
              // height: "100%",
              // cursor: "pointer",
              // paddingLeft: "10%",
              // paddingTop: "5%",
            }
          }
          className="pointer md:flex md:flex-col md:justify-center md:gap-[3em] md:w-[100%] md:h-[100%] md:pl-[10%] md:pt-[5%]        sm:flex sm:flex-col sm:justify-center sm:gap-[3em] sm:w-[100%] sm:h-[100%] sm:pl-[10%] sm:pt-[5%]"
        >
          <div
            className="md:flex md:flex-col md:gap-[.8em]    sm:flex sm:flex-col sm:gap-[.8em]"
            style={
              {
                // display: "flex",
                // flexDirection: "column",
                // gap: ".8em",
              }
            }
          >
            <div className="md:text-[20px] sm:text-[15px]">{name}</div>
            <div>
              {director1}
              <Divider
                sx={{ background: "peru", width: "30px", height: ".5vh" }}
              />
            </div>
          </div>

          <div style={{ textDecoration: "underline" }}>
            <BasicModal
              view={view}
              director={director}
              names={names}
              content={content}
              image={image}
              content2={content2}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxsOfPics;
