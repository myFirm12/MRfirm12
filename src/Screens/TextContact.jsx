import judge from "../assets/HeadImages/still-life-with-scales-justice.jpg";
import ContactsForm from "../Components/Contacts&Form/Contacts&Form";
import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import { Check } from "@mui/icons-material";
import Footer from "../Components/Footer/Footer";

function TextContact() {
  return (
    <div className="md:h-[280vh] md:w-[100%] md:flex md:flex-col  sm:h-[350vh] sm:w-[100%] sm:flex sm:flex-col">
      {/* Head */}
      <div
        className="md:basis-[4%] sm:basis-[3%]"
        // style={{ background: "black" }}
      >
        <ScreenNavBar />
      </div>

      {/*  */}
      <div
        className="md:basis-[18%] md:flex md:flex-col md:justify-center md:items-center md:gap-[1em]      sm:basis-[18%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[1em]"
        style={{
          background: "blue",
          // backgroundImage: `url(${judge})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "-20vh",
          backgroundImage: `linear-gradient(90deg, rgba(92,53,47,1) 27%, rgba(92,70,47,0.9710477941176471) 51%, rgba(92,70,47,0.5004595588235294) 78%), url("${judge}")`,
          //   backgroundRepeat: "no-repeat",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // flexDirection: "column",
          // gap: "1em",
        }}
      >
        <div
          className="md:w-[17%] md:h-[10vh] md:flex md:flex-col   sm:w-[17%] sm:h-[10vh] sm:flex sm:flex-col"
          style={
            {
              //   width: "17%",
              //   height: "10vh",
              //   display: "flex",
              //   flexDirection: "column",
            }
          }
        >
          <div
            className="md:basis-[50%]   md:flex md:justify-center md:items-center md:gap-[.5em]   sm:basis-[50%] sm:w-[100%]  sm:flex sm:justify-center sm:items-center sm:gap-[.5em]"
            style={{
              // flex: ".5",
              background: "green",
              borderTopLeftRadius: "10%",
              borderTopRightRadius: "10%",
            }}
          >
            <div>
              {" "}
              <Check sx={{ color: "white" }} />{" "}
            </div>
            <small style={{ fontSize: "15px" }}>review solicitors</small>
          </div>
          <div
            className="md:basis-[50%] md:flex md:justify-center md:items-center    sm:basis-[50%] sm:flex sm:justify-center sm:items-center"
            style={{
              //   flex: ".5",
              background: "peru",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            <div>TRUSTED LAW FIRM</div>
          </div>
        </div>
        <div
          className="md:flex-col md:gap-[1em] md:flex md:justify-center md:items-center   sm:flex-col sm:gap-[1em] sm:flex sm:justify-center sm:items-center"
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
          <h3 style={{ fontSize: "30px", color: "white" }}>
            {" "}
            Contact Us Today
          </h3>
          <button style={{ width: "80%", height: "8vh" }}>
            GENERAL ENQUIRY
          </button>
        </div>
      </div>

      {/*  */}
      <div
        className="md:basis-[48%] sm:basis-[49%]"
        style={{ background: "rgb(230, 225, 225)" }}
      >
        <ContactsForm />
      </div>
      <div
        className="md:basis-[30%] sm:basis-[30%]"
        style={{ background: "black" }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default TextContact;
