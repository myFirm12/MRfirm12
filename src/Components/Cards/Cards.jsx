import { StarsOutlined } from "@mui/icons-material";
import React from "react";

function Cards() {
  return (
    <>
      <div
        className="md:flex md:flex-row  md:gap-[.1em] md:h-[100%]     sm:flex sm:flex-col  sm:gap-[.1em] sm:h-[100%]"
        style={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // gap: ".1em",
            // height: "100%",
          }
        }
      >
        {/* First Card*/}
        <div
          className="md:w-[23vw] md:h-[35vh] md:flex md:flex-col md:justify-center md:items-center md:gap-[1em]   sm:w-[100vw] sm:h-[35vh] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[1em]"
          style={{
            background: "rgb(35, 139, 35)",
            // width: "23vw",
            // height: "35vh",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // gap: "1em",
          }}
        >
          <h2 style={{ color: "white" }}>Excellent 4.11/5</h2>
          <div>
            <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
            <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
            <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
            <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
          </div>
          <small style={{ color: "white" }}>
            Based on 433{" "}
            <span style={{ textDecoration: "underline" }}>reviews</span>{" "}
          </small>
          <small
            className="md:text-center  sm:text-center"
            style={{ color: "white" }}
          >
            Independent and verified third <br />
            party reviews.
          </small>
        </div>
        {/* second card */}
        <div
          className="md:w-[23vw] md:h-[35vh] md:flex md:flex-col md:justify-center md:items-center md:gap-[2em] md:p-[10px]     sm:w-[100vw] sm:h-[35vh] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[2em] sm:p-[10px]"
          style={{
            background: "rgb(220, 214, 214)",
            // width: "23vw",
            // height: "35vh",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // gap: "2em",
            // padding: "10px",
          }}
        >
          <div
            className="md:flex md:items-center md:gap-[10em]    sm:flex sm:items-center sm:gap-[10em]"
            style={
              {
                // display: "flex",
                // justifyContent: "space-between",
                // alignItems: "center",
                // gap: "10em",
              }
            }
          >
            <div>Ben</div>
            <div>
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
            </div>
          </div>
          <small className="md:text-start  sm:text-start">
            这家律所，非常专业并且高效，值得推荐，会推荐给周边的朋友，而且下次还会继续选择他们！
          </small>
          <small className="md:ml-[-50%] sm:ml-[-50%]">Added 3 days ago</small>
        </div>
        {/* third card */}
        <div
          className="md:w-[23vw] md:h-[35vh] md:flex md:flex-col md:justify-center md:items-center md:gap-[2em] md:p-[10px]    sm:w-[100vw] sm:h-[35vh] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[2em] sm:p-[10px]"
          style={{
            background: "rgb(221, 218, 218)",
            // padding: "10px",
            // width: "23vw",
            // height: "35vh",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // gap: "2em",
          }}
        >
          <div
            className="md:flex md:items-center md:gap-[10em]    sm:flex sm:items-center sm:gap-[10em]"
            style={
              {
                // display: "flex",
                // justifyContent: "space-between",
                // alignItems: "center",
                // gap: "10em",
              }
            }
          >
            <div>prem</div>
            <div>
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
            </div>
          </div>
          <small className="md:text-start  sm:text-start">
            As a first time buyer the process is daunting. However Reshmi
            Poulose and the team was fabulous and so professional in whole
            process and helped us in all our questions . Fantastic team. Thank
            you all
          </small>
          <small className="md:ml-[-50%] sm:ml-[-50%]">Added 5 days ago</small>
        </div>
        {/* fourth card */}
        <div
          className="md:w-[23vw] md:h-[35vh] md:flex md:flex-col md:justify-center md:items-center md:gap-[2em] md:p-[10px]    sm:w-[100vw] sm:h-[35vh] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[2em] sm:p-[10px]"
          style={{
            background: "rgb(215, 212, 212)",
          }}
        >
          <div
            className="md:flex md:items-center md:gap-[8em]    sm:flex sm:items-center sm:gap-[8em]"
            style={
              {
                // display: "flex",
                // alignItems: "center",
                // gap: "8em",
              }
            }
          >
            <div>Mahibur</div>
            <div>
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
              <StarsOutlined sx={{ color: "rgb(213, 188, 48)" }} />
            </div>
          </div>
          <small>
            Law & Lawyers Solicitors handled everything smoothly. They notified
            me when they needed to. Took the burden off my shoulders and
            explained everything so I understand. Very good.
          </small>
          <small className="md:ml-[-50%] sm:ml-[-50%]">Added 1 week ago</small>
        </div>
      </div>
    </>
  );
}

export default Cards;
