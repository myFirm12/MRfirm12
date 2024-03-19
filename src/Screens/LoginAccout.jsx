import ReplyIcon from "@mui/icons-material/Reply";
import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import judge from "../assets/Logo/photorealistic-lawyer-environment.jpg";

function LoginAccout() {
  return (
    <div>
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
          gap: "6em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            marginRight: "13%",
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
            Log in to your <br /> account
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: ".8em",
          }}
        >
          {/* <button style={{ width: "30vw", height: "6vh", fontSize: "15px" }}>
            Login
          </button> */}
          <TextField className="md:w-[28vw] sm:w-[70vw]" placeholder="Email" />
          <TextField
            className="md:w-[28vw] sm:w-[70vw]"
            placeholder="Password"
          />
          <Link
            to="/forgot_account"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            {" "}
            <div style={{ color: "white" }}>forgot your password?</div>
          </Link>
          <button
            className="md:w-[30vw] md:h-[6vh]  sm:w-[30vw] sm:h-[6vh]"
            style={{
              fontSize: "15px",
              color: "white",
              background: "rgb(30,22,147)",
            }}
          >
            Sign In
          </button>
        </div>
        <div style={{ color: "white" }}>
          Don't have an account?{" "}
          <Link
            to="/Register"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            {" "}
            <span style={{ color: "rgb(28, 28, 143)" }}>Register</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginAccout;
