import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import ComboBox from "../Components/AutoComplete/ComboBox";
import judge from "../assets/Logo/photorealistic-lawyer-environment.jpg";

function Register() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `linear-gradient(164deg, rgba(30,22,147,0.5340730042016807) 52%, rgba(30,22,147,0.4724483543417367) 69%), 
          linear-gradient(90deg, rgba(92,53,47,1) 27%, rgba(92,70,47,0.9710477941176471) 51%, rgba(92,70,47,0.5004595588235294) 78%), 
          url("${judge}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: ".1em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            marginRight: "16%",
            color: "white",
          }}
        >
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <div>
              <ReplyIcon />
            </div>
          </Link>
          <div style={{ fontSize: "30px" }}>
            Create your
            <br /> account
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2em",
          }}
        >
          {/* <button style={{ width: "30vw", height: "6vh", fontSize: "15px" }}>
            Login
          </button> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <TextField
              className="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
              placeholder="Email"
            />
            <TextField
              className="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
              placeholder="Email"
            />
            <TextField
              className="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
              placeholder="Email"
            />
            <TextField
              className="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
              placeholder="Email"
            />
            <ComboBox
              styl="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
              label={"I'M INTERESTED IN"}
              first={"Conveyancing & Property"}
              // width={"28vw"}
            />
            <ComboBox
              label={"I NEED HELP WITH"}
              first={"I need help with"}
              second={"Purchase"}
              third={"Sale"}
              fourth={"Remortgage"}
              fifth={"New Build Purchase"}
              styl="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
            />
          </div>
          <button style={{ width: "28vw", height: "6vh", fontSize: "15px" }}>
            Register
          </button>
        </div>
        <div style={{ color: "white" }}>
          Already have an account?
          <span style={{ color: "rgb(28, 28, 143)" }}> Sign In</span>{" "}
        </div>
      </div>
    </>
  );
}

export default Register;
