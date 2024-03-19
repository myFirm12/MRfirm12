import React from "react";
import judge from "../assets/Logo/photorealistic-lawyer-environment.jpg";
import logo from "../assets/Logo/logo.jpeg";
import { Link } from "react-router-dom";

function Login() {
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
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <div
          style={{
            marginTop: "-15%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4em",
          }}
        >
          <img src={logo} className="md:w-[30%] sm:w-[55%]" alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5em",
            }}
          >
            <Link
              to="/loginAccount"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <button
                className="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
                style={{
                  // width: "30vw",
                  // height: "6vh",
                  fontSize: "15px",
                  background: "rgb(30,22,147)",
                }}
              >
                Login
              </button>
            </Link>
            <Link
              to="/Register"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <button
                className="md:w-[30vw] md:h-[6vh]  sm:w-[70vw] sm:h-[6vh]"
                style={{
                  // width: "30vw",
                  // height: "6vh",
                  fontSize: "15px",
                  background: "rgb(30,22,147)",
                }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
