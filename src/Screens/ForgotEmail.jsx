import { TextField } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import React from "react";
import judge from "../assets/Logo/photorealistic-lawyer-environment.jpg";
import { Link } from "react-router-dom";

function ForgotEmail() {
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
            marginRight: "15%",
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
            Forgot your
            <br />
            password?
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
          <small>
            Fill in your registered email address, and we'll get you back <br />{" "}
            on track in no time.
          </small>
          <TextField
            className="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
            placeholder="Email Address"
          />
          <div style={{ color: "white" }}>forgot your password?</div>
          <Link
            to="/Register"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            {" "}
            <button style={{ width: "28vw", height: "6vh", fontSize: "15px" }}>
              Reset Password
            </button>
          </Link>
        </div>
        <div style={{ color: "white" }}>
          Already have an account?
          <Link
            to="/loginAccount"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <span style={{ color: "rgb(28, 28, 143)" }}> Sign In</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotEmail;
