import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Close,
  Facebook,
  Instagram,
  LinkedIn,
  Menu,
  PersonAddAlt1,
  Search,
  Twitter,
} from "@mui/icons-material";
import { CustomSearchField } from "../CustomSearchField/CustomSearchField";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.jpeg";

export default function LawEnforcementDrawer() {
  const [state, setState] = React.useState({
    right: false,
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="md:w-[100%] md:h-[100vh]  sm:w-[100%] sm:h-[200vh]"
      sx={{
        // width: 300,
        // height: "100vh",
        // padding: "3vh 1vw",
        // display: "flex",
        // flexDirection: "column",
        // zIndex: "10000",
        background: "white",
      }}
    >
      <div
        className="md:flex md:flex-row md:w-[100vw] md:h-[100vh]  sm:flex sm:flex-col sm:w-[100vw] sm:h-[150vh]"
        style={
          {
            // display: "flex",
            // flexDirection: "row",
            // width: "100vw",
            // height: "100%",
            // flexDirection:"column-reverse"
          }
        }
      >
        {/* Left Contents */}
        <div
          className="md:flex md:flex-col md:basis-[30%]   sm:flex sm:flex-col sm:basis-[40%]"
          style={{
            // flex: ".3",
            background: "rgb(28, 28, 143)",
            // background: "red",
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <div
            className="md:p-[15%] sm:p-[10%] md:justify-start sm:justify-between"
            style={{
              flex: ".2",
              display: "flex",
              // justifyContent: "start",
              alignItems: "center",
              // paddingLeft: "15%",
            }}
          >
            <img src={logo} className="md:w-[100%] sm:w-[50%]" alt="" />
            <div
              className="md:w-[8vw] md:h-[12vh] sm:h-[5vh] sm:w-[10vw] md:opacity-[0] sm:opacity-[9]"
              style={{
                // width: "8vw",
                // height: "12vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgb(28, 28, 143)",
              }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Close sx={{ fontSize: "35px", color: "white" }} />
            </div>
          </div>
          <div
            className="md:pl-[25%] sm:pl-[10%]"
            style={{
              flex: ".5",
              // background: "green",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              // paddingLeft: "25%",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                fontSize: "15px",
                color: "white",
              }}
            >
              <Link
                to="/about_Us"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li style={{ fontWeight: "bolder" }}>About</li>
              </Link>
              <li>Who we are</li>
              <li>CSR</li>
              <li>Diversity</li>
              <Link
                to="/about_Us"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li style={{ fontWeight: "bold" }}> Our People</li>{" "}
              </Link>
              <Link
                to="/latest_News"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li style={{ fontWeight: "bold" }}>Latest News</li>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li style={{ fontWeight: "bold" }}>Contact</li>
              </Link>
              <li style={{ fontWeight: "bold" }}>Career</li>
            </ul>
          </div>
          <div
            className="md:pl-[25%] sm:pl-[10%]"
            style={{
              flex: ".3",
              // background: "red",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "start",
              // paddingLeft: "25%",
              gap: "1em",
              color: "white",
            }}
          >
            <div>
              <p style={{ color: "white" }}>
                {" "}
                352 High St N, London E12 6PH <br /> +44(0)20 8586 5657
              </p>
              <small>info@lawandlawyers.co.uk</small>
            </div>
            <ul style={{ display: "flex", flexDirection: "row", gap: ".5em" }}>
              <li>
                {" "}
                <Instagram sx={{ fontSize: "15px" }} />
              </li>
              <li>
                <Facebook sx={{ fontSize: "15px" }} />
              </li>
              <li>
                <Twitter sx={{ fontSize: "15px" }} />
              </li>
              <li>
                <LinkedIn sx={{ fontSize: "15px" }} />
              </li>
            </ul>
          </div>
        </div>

        {/* center Contents */}
        <div
          className="md:basis-[4%] sm:basis-[0%]"
          style={{ background: "white" }}
        ></div>

        {/* Right Contents */}
        <div
          className="md:flex md:flex-col md:basis-[69%] md:pt-[0%] sm:pt-[5%]  sm:flex sm:flex-col sm:basis-[60%]"
          style={
            {
              // flex: ".69",
              // background: "pink",
              // display: "flex",
              // flexDirection: "column",
              // background: "green",
            }
          }
        >
          <div
            className="md:basis-[12%] md:flex md:flex-row md:gap-[0em]  sm:gap-[1em] sm:basis-[12%] sm:flex sm:flex-col"
            style={
              {
                // flex: ".12",
                // background: "black",
                // display: "flex",
                // flexDirection: "row",
              }
            }
          >
            <div
              className="md:basis-[48%]  sm:basis-[60%]"
              style={{
                // flex: ".48",
                // background: "red",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
              }}
            >
              {" "}
              <CustomSearchField placeholder={"search"} />
            </div>
            <div
              className="md:basis-[40%]  sm:basis-[40%]"
              style={{
                // flex: ".4",
                // background: "green",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                paddingRight: "5%",
              }}
            >
              <Link
                to="/Conveyancing_Solicitors"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button
                  className="convey md:w-[20vw] md:h-[7vh]  sm:w-[60vw] sm:h-[7vh]"
                  // style={{ width: "20vw", height: "7vh" }}
                >
                  Get a Conveyancing Quote
                </button>
              </Link>
            </div>
            <div
              className="md:basis-[12%] md:opacity-[9] sm:hidden md:block sm:basis-[0%] sm:opacity-[1%]"
              style={{
                // flex: ".12",
                // background: "blue",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                // border: "solid black 2px",
              }}
            >
              <div
                style={{
                  width: "8vw",
                  height: "12vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgb(28, 28, 143)",
                }}
                onClick={toggleDrawer(anchor, false)}
              >
                <Close sx={{ fontSize: "35px", color: "white" }} />
              </div>
            </div>
          </div>
          <div className="md:basis-[85%] md:flex md:flex-row md:gap-[0em] md:pt-[15%]  sm:gap-[1em]  sm:basis-[85%] sm:flex sm:flex-col sm:pt-[0%]">
            <div
              className="md:pl-[15%] sm:pl-[10%]"
              style={{
                flex: ".4",
                // background: "pink",
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                // justifyContent: "center",
                // paddingTop: "15%",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                Personal
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5em",
                }}
              >
                <Link
                  to="/Conveyancing_Solicitors"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Residential Conveyancing</li>
                </Link>
                <Link
                  to="/Immigration"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Immigration</li>
                </Link>
                <Link
                  to="/willandprobate"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Wills and Probate</li>
                </Link>
                <Link
                  to="/EmploymentLaw"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Employment</li>
                </Link>
                <Link
                  to="/FamilyLaw"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Family</li>
                </Link>
                <Link
                  to="/LandLord"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Landlord and Tenant</li>
                </Link>
              </ul>
            </div>
            <div
              className="md:pl-[15%] sm:pl-[10%]"
              style={{
                flex: ".6",
                // background: "green",
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                // justifyContent: "center",
                // paddingTop: "15%",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                Commercial
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5em",
                }}
              >
                <Link
                  to="/Conveyancing_Solicitors"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Commercial Conveyancing</li>
                </Link>
                <Link
                  to="/Immigration"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Corporate Immigration Services</li>
                </Link>
                <Link
                  to="/EmploymentLaw"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li>Employment Law</li>{" "}
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            className="md:w-[7.97vw] md:h-[10vh] md:flex md:justify-center md:items-center         sm:w-[7.97vw] sm:h-[5vh] sm:flex sm:justify-center sm:items-center"
            style={{
              // width: "7.97vw",
              // height: "10vh",
              background: "rgb(23, 23, 118)",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <Menu className="md:text-[65px]" sx={{ color: "white" }} />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
