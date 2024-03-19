import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

import image1 from "../../assets/FooterImage/ftr-logo-1.png";
import image2 from "../../assets/FooterImage/sra.jpg";
// import image2 from "../assets/FooterImage/";
import image3 from "../../assets/FooterImage/footer-logos.png";
import logo from "../../assets/Logo/logo.jpeg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="md:flex md:flex-col md:h-[100%] sm:flex sm:flex-col md:p-[0px] sm:h-[100%] sm:p-[15px]"
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // height: "100%",
          }
        }
      >
        <div
          className="md:basis-[70%] md:flex md:flex-row md:gap-[0%]  sm:gap-[1em] sm:basis-[70%] sm:flex sm:flex-col"
          style={{
            // flex: ".7",
            //   background: "yellow",
            // display: "flex",
            // flexDirection: "row",
            color: "white",
          }}
        >
          <div
            className="md:basis-[15%] md:flex md:justify-center md:items-center       sm:basis-[15%] sm:flex sm:justify-center sm:items-center"
            // style={{ background: "red" }}
          >
            <img
              src={logo}
              className="md:w-[100%] md:h-[15%]  sm:w-[40%] sm:h-[100%]"
              alt=""
            />
          </div>
          <div
            className="md:basis-[15%] md:grid md:justify-center md:sm:mr-[0px]   sm:basis-[15%] sm:grid sm:justify-center sm:items-center "
            style={{
              // flex: ".15",
              color: "white",
              // display: "grid",
              // justifyContent: "center",
              // placeContent: "center",
              // placeItems: "center",
              // paddingTop:""
              // background: "blue",
            }}
          >
            <ul
              className="md:flex md:flex-col md:gap-[1em] md:text-[15px] md:mt-[-50%] md:list-none     sm:flex sm:flex-col sm:gap-[1em] sm:text-center sm:text-[15px] sm:mt-[0%] sm:list-none"
              style={
                {
                  // display: "flex",
                  // flexDirection: "column",
                  // gap: "1em",
                  // fontSize: "15px",
                  // paddingTop: "70%",
                  // listStyle: "none",
                }
              }
            >
              <li>Company</li>
              <Link
                to="/about_Us"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>About</li>
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Contact</li>
              </Link>
              <Link
                to="/latest_News"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>News and Insights</li>
              </Link>
              <li>Careers</li>
            </ul>
          </div>
          <div
            className="md:basis-[15%] md:grid md:justify-center md:sm:mr-[0px]  sm:basis-[15%] sm:grid sm:justify-center sm:items-center "
            // style={{ background: "green" }}
          >
            <ul
              className="md:flex md:flex-col md:gap-[1em] md:text-[15px] md:mt-[-1%] md:list-none     sm:flex sm:flex-col sm:gap-[1em] sm:text-center  sm:text-[15px] sm:mt-[0%] sm:list-none"
              style={
                {
                  // display: "flex",
                  // flexDirection: "column",
                  // gap: "1em",
                  // fontSize: "15px",
                  // paddingTop: "40%",
                  // listStyle: "none",
                }
              }
            >
              <li> FOR INDIVIDUALS</li>
              <Link
                to="/Conveyancing_Solicitors"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Residential Conveyancing</li>{" "}
              </Link>
              <Link
                to="/Immigration"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Immigration</li>
              </Link>
              <Link
                to="/willandprobate"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Wills and Probate</li>
              </Link>
              <Link
                to="/EmploymentLaw"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Employment</li>
              </Link>
              <Link
                to="/FamilyLaw"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Family</li>
              </Link>
              <Link
                to="/LandLord"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Landlord and Tenant</li>
              </Link>
            </ul>
          </div>
          <div
            className="md:basis-[15%] md:grid md:justify-center   sm:basis-[15%] sm:grid sm:justify-center sm:items-center"
            // style={{ background: "pink" }}
          >
            <ul
              className="md:flex md:flex-col md:gap-[1em] md:text-[15px] md:mt-[-30%] md:list-none     sm:flex sm:flex-col sm:gap-[1em] sm:text-center  sm:text-[15px] sm:mt-[0%] sm:list-none"
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   gap: "1em",
              //   fontSize: "15px",
              //   paddingTop: "40%",
              //   listStyle: "none",
              // }}
            >
              <li>FOR BUSINESSES</li>
              <Link
                to="/Conveyancing_Solicitors"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Commercial Conveyancing</li>
              </Link>
              <Link
                to="/Immigration"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Corporate Immigration Services</li>
              </Link>
              <Link
                to="/EmploymentLaw"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <li>Employment Law</li>
              </Link>

              <li>Dispute Resolution</li>
            </ul>
          </div>
          <div
            className="md:basis-[40%] md:p-[0px]  md:flex md:flex-row md:justify-center md:items-center md:gap-[1em] md:text-[15px]  md:list-none    sm:basis-[40%]  sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[1em] sm:text-[15px]  sm:list-none sm:p-[10px]"
            style={
              {
                // flex: ".4",
                // display: "flex",
                // flexDirection: "row",
                // gap: "1em",
                // justifyContent: "center",
                // alignItems: "center",
                // background: "cyan",
              }
            }
          >
            <img
              src={image1}
              className="md:w-[50%] md:h-[20vh]  sm:w-[100%] sm:h-[20vh]"
            />
            <img
              src={image2}
              className="md:w-[50%] md:h-[20vh] sm:w-[100%] sm:h-[20vh]"
            />
          </div>
        </div>

        {/* ================================= */}
        <div
          className="md:flex md:justify-center md:items-center md:basis-[25%]   sm:flex sm:justify-center sm:items-center sm:basis-[25%]"
          style={{
            // flex: ".25",
            color: "white",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <ul
            className="md:flex md:flex-row  md:justify-center md:items-center md:gap-[2em]  md:pl-[5%] md:list-none    sm:flex  sm:justify-center sm:items-center sm:gap-[2em]  sm:pl-[5%] sm:list-none sm:flex-col"
            style={
              {
                // display: "flex",
                // gap: "2em",
                // justifyContent: "center",
                // alignItems: "center",
                // paddingLeft: "5%",
                // listStyle: "none",
              }
            }
          >
            <li>
              LONDON – MANOR PARK (HEAD OFFICE) <p>+44 (20) 4080 4556</p>
              <p>+44 (75) &nbsp;3718 &nbsp;1162</p>
              <p>info@lawandlawyers.co.uk </p>
            </li>
            <li>
              LONDON – MANOR PARK (HEAD OFFICE) <p>+44 (20) 4080 4556</p>
              <p>+44 (75) &nbsp;3718 &nbsp;1162</p>
              <p>info@lawandlawyers.co.uk </p>
            </li>
            <li>
              LONDON – MANOR PARK (HEAD OFFICE) <p>+44 (20) 4080 4556</p>
              <p>+44 (75) &nbsp;3718 &nbsp;1162</p>
              <p>info@lawandlawyers.co.uk </p>
            </li>
            <li>
              <img src={image3} alt="" className="md:w-[100%] sm:w-[100%]" />
            </li>
          </ul>
        </div>
        <div
          className="md:flex md:flex-row md:items-center md:basis-[5%] md:justify-between      sm:flex sm:flex-col sm:items-center sm:basis-[5%] sm:justify-between"
          style={{
            // flex: ".05",
            background: "white",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          <div
            className="md:text-[13px] sm:text-[10px] "
            style={{ color: "black" }}
          >
            ©2024 Law & Lawyers Solicitors Ltd. All rights reserved. Privacy
            Policy | Cookie Policy | Complaints | Fee-Information | Covid-19
          </div>
          <ul
            className="md:flex md:flex-row md:justify-center md:items-center md:gap-[1em]  md:pl-[5%] md:list-none    sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-[.5em]  sm:pl-[5%] sm:list-none"
            style={
              {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // gap: "1em",
                // listStyle: "none",
              }
            }
          >
            <li className="md:text-[13px] sm:text-[5px]">
              Design & Developed by Weft Technologies
            </li>
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
    </>
  );
}

export default Footer;
