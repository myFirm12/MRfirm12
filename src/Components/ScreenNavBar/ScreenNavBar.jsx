import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ChoosePlanPageDrawer from "../Drawer/LawEnforcementDrawer";
import LawEnforcementDrawer from "../Drawer/LawEnforcementDrawer";
import logo from "../../assets/Logo/logo.jpeg";

function ScreenNavBar() {
  return (
    <>
      <div
        className="md:fixed md:flex-col md:flex md:w-[100%] md:h-[11.2vh]    sm:flex sm:flex-row sm:fixed sm:w-[100%] sm:h-[8vh] "
        style={{
          // position: "fixed",
          // display: "flex",
          // flexDirection: "column",
          // height: "11.2vh",
          // width: "100%",
          background: "rgb(28, 28, 143)",
          zIndex: 50,
        }}
      >
        <div
          className="md:basis-[90%] md:flex md:flex-row    sm:basis-[90%] sm:flex sm:flex-row"
          style={
            {
              // flex: ".9",
              // background: "red",
              // display: "flex",
              // flexDirection: "row",
            }
          }
        >
          <div
            className="md:basis-[17%] md:flex md:justify-end md:items-center       sm:basis-[17%] sm:flex sm:justify-end sm:items-center"
            style={
              {
                // flex: ".17",
                //   background: "yellow",
                // display: "flex",
                // justifyContent: "end",
                // alignItems: "center",
              }
            }
          >
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <img src={logo} alt="" className="md:w-[100%]  sm:w-[100%]" />
            </Link>
          </div>
          <div
            className="md:basis-[76%] md:flex md:justify-end md:items-center         sm:basis-[76%] sm:flex sm:justify-end sm:items-center"
            style={
              {
                // flex: ".76",
                // display: "flex",
                // justifyContent: "flex-end",
                // alignItems: "center",
                //   background: "black",
              }
            }
          >
            <ul
              className=" md:flex md:justify-end md:items-center md:gap-[1.5em] md:text-[1.2em] md:list-none md:pr-[5%]        sm:hidden   sm:flex sm:justify-end sm:items-center sm:gap-[1.5em] sm:text-[1.2em] sm:list-none sm:pr-[5%]"
              style={{
                // display: "flex",
                // justifyContent: "flex-end",
                // alignItems: "center",
                // gap: "1.5em",
                // fontSize: "1.2em",
                color: "white",
                // paddingRight: "5%",
                // listStyle: "none",
              }}
            >
              <Link
                to="/get-quote"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Get a quote</li>
              </Link>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Client Login</li>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div
            className="md:basis-[7%] md:grid md:place-content-center     sm:basis-[7%] sm:grid sm:place-content-center"
            style={
              {
                // flex: ".07",
                // display: "grid",
                // justifyContent: "end",
                // alignItems: "center",
                // background: "blue",
                // placeContent: "center",
              }
            }
          >
            <LawEnforcementDrawer />
          </div>
        </div>
        <div className="md:basis-[10%] sm:basis-[10%]">
          {/* <Divider sx={{ background: "white", height: ".2vh" }} /> */}
        </div>
      </div>
    </>
  );
}

export default ScreenNavBar;
