import React from "react";
import Cards from "../Components/Cards/Cards";
import Footer from "../Components/Footer/Footer";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import pic1 from "../assets/HeadImages/law.jpg";
import { Divider, IconButton } from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

function TextRead1() {
  return (
    <div>
      <div className="md:h-[420vh] md:w-[100%] md:flex md:flex-col  sm:h-[600vh] sm:w-[100%] sm:flex sm:flex-col">
        {/* Head */}
        <div
          className="md:basis-[2%]  sm:basis-[1.7%]"
          // style={{ background: "black" }}
        >
          <ScreenNavBar />
        </div>

        {/* Convey */}
        <div
          className="md:basis-[10%] md:text-[40px] md:pl-[12%] md:items-center md:justify-start md:flex md:text-bold        sm:basis-[5.3%] sm:text-[40px] sm:pl-[12%] sm:items-center sm:justify-start sm:flex sm:text-bold"
          style={{
            background: "rgb(100, 183, 211)",

            color: "rgb(28, 28, 143)",
          }}
        >
          <div
            className="md:flex md:flex-col md:gap-[.5em]   sm:flex sm:flex-col sm:gap-[.5em]"
            style={
              {
                // display: "flex",
                // flexDirection: "column",
                // gap: ".5em",
              }
            }
          >
            <small
              className="md:text-[15px] sm:text-[15px]"
              style={{ color: "white" }}
            >
              By Law And Lawyears, June 3, 2019
            </small>
            <div
              className="md:text-bold md:text-[40px]   sm:text-bold sm:text-[20px]"
              style={{
                color: "white",
              }}
            >
              Could tighter restrictions mean home moves <br />
              has to stop?
            </div>
          </div>
        </div>

        {/* Contents */}
        <div
          className="md:basis-[68%] md:flex md:flex-row  sm:basis-[75%] sm:flex sm:flex-col"
          style={{ background: "pink" }}
        >
          {/* Left contents */}
          <div
            className="md:basis-[40%] md:flex md:justify-center md:items-start md:pt-[10%]    sm:basis-[30%] sm:flex sm:justify-center sm:items-start sm:pt-[10%]"
            style={{ background: "rgb(28, 28, 143)" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2em",
                  color: "white",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bolder" }}>
                  New 95% mortgage <br /> scheme launches today
                </div>
              </div>
              <div>
                <div
                  className="md:w-[14vw] md:h-[15vh] sm:w-[100vw] sm:h-[20vh]"
                  style={{
                    // width: "14vw",
                    // height: "15vh",
                    background: "black",
                    backgroundImage: `url(${pic1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <small
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".8em",
                }}
              >
                New 95% mortgage guarantee scheme launches <br /> today,
                available on high streets across the
                <br /> country The scheme was first announced at the
                <br /> 2021 Budget. The new scheme will help first time
                <small style={{ textDecoration: "underline" }}>ReadMore</small>
              </small>
              <Divider
                className="md:w-[20vw] sm:w-[90vw]"
                sx={{ background: "white" }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2em",
                  color: "white",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bolder" }}>
                  Could tighter restrictions <br /> mean home moves has to
                </div>
              </div>
              <div>
                <div
                  className="md:w-[14vw] md:h-[15vh] sm:w-[100vw] sm:h-[20vh]"
                  style={{
                    // width: "14vw",
                    // height: "15vh",
                    background: "black",
                    backgroundImage: `url(${pic1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <small
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".8em",
                }}
              >
                Law and Lawyers Ltd, Conveyancing Solicitors in <br /> East
                London The new covid strain is spreading <br /> rapidly across
                the UK that the goverment was <br /> forced to implement a
                National Lockdown. Whilst...
                <small style={{ textDecoration: "underline" }}>ReadMore</small>
              </small>
              <Divider
                className="md:w-[20vw] sm:w-[90vw]"
                sx={{ background: "white" }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2em",
                  color: "white",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bolder" }}>
                  What is Conveyancing?
                </div>
              </div>
              <div>
                <div
                  className="md:w-[14vw] md:h-[15vh] sm:w-[100vw] sm:h-[20vh]"
                  style={{
                    // width: "14vw",
                    // height: "15vh",
                    background: "black",
                    backgroundImage: `url(${pic1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <small
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".8em",
                }}
              >
                Law and Lawyers Ltd, Conveyancing Solicitors in <br /> East
                London 03 June 2019 Conveyancing Explained Conveyancing <br />{" "}
                is the legal transfer of <br /> property from one owner to
                another. The...
                <small style={{ textDecoration: "underline" }}>ReadMore</small>
              </small>
              <Divider
                className="md:w-[20vw] sm:w-[90vw]"
                sx={{ background: "white" }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2em",
                  color: "white",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bolder" }}>
                  UK to expand skilled <br /> occupations list
                </div>
              </div>
              <div>
                <div
                  className="md:w-[14vw] md:h-[15vh] sm:w-[100vw] sm:h-[20vh]"
                  style={{
                    // width: "14vw",
                    // height: "15vh",
                    background: "black",
                    backgroundImage: `url(${pic1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <small
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".8em",
                }}
              >
                Law and Lawyers, Immigration Lawyers in East <br /> London 04
                June 2019 The Migration Advisory <br /> Committee (MAC) has
                published its review of the <br /> shortage occupation list
                (SOL) on 29th March...
                <small style={{ textDecoration: "underline" }}>ReadMore</small>
              </small>
              <Divider
                className="md:w-[20vw] sm:w-[90vw]"
                sx={{ background: "white" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div
            className="md:basis-[60%] md:flex md:flex-col   sm:basis-[70%] sm:flex sm:flex-col"
            style={{ background: " rgb(213, 207, 207)" }}
          >
            {/* Contents */}
            <div
              className="md:flex md:basis-[100%] md:pt-[5%]  sm:flex sm:basis-[100%] sm:pt-[5%]"
              style={
                {
                  // flex: "1",
                  // background: "pink",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // paddingLeft: "5%",
                  // paddingTop: "5%",
                }
              }
            >
              <div
                className="md:flex md:gap-[2em] md:text-[17px] md:pl-[5%]  md:flex-col  sm:flex sm:gap-[1em] sm:flex-col sm:text-[15px] sm:pl-[0%]"
                style={
                  {
                    //   display: "flex",
                    //   flexDirection: "column",
                    //   gap: "2em",
                    //   paddingLeft: "5%",
                    //   alignItems: "center",
                  }
                }
              >
                {/* ============================== */}
                {/* <div style={{ flex: ".3", background: "green" }}> */}
                <div
                  className="md:flex md:gap-[1.5em] md:text-[17px]  md:flex-col  sm:flex sm:gap-[1em] sm:flex-col sm:text-[15px]"
                  //   style={{
                  //     display: "flex",
                  //     flexDirection: "column",
                  //     gap: "1.5em",
                  //     fontSize: "17px",
                  //   }}
                >
                  <div>
                    Law and Lawyers Ltd, Conveyancing Solicitors in East London
                  </div>
                  <div>
                    The new covid strain is spreading rapidly across the UK that
                    the goverment was <br /> forced to implement a National
                    Lockdown. Whilst the vaccine distribution could <br />{" "}
                    months to complete, new tighter restrictions are called for
                    to reduce death rates <br /> and save thousands of UK
                    residents.
                  </div>
                  <div>
                    The government is under immense pressure now to tighten the
                    lockdown <br />
                    restrictions further, as NHS hospitals are getting
                    oversubscribed with the number of
                    <br /> patients. We could see a new strict and tighter
                    lockdown rules in the coming weeks
                    <br /> as a result.
                  </div>
                  <div>
                    The Cheif Medical Office of England, Professor Chris Witty
                    has warned <br /> that the next few weeks will be the “worst
                    weeks of pandemic”.
                  </div>
                  <div>
                    How a tighter lockdown will affect the property sector?
                  </div>
                  <div>
                    Sir Kier Starmer, yesterday, during his speech, where he was
                    criticising the <br /> goverment’s handling of the
                    Coronavirus crisis, the labour leader did not go so far to{" "}
                    <br /> say that the housing market should be effectively
                    shut down, as it was in the spring <br /> 2020 lockdown.
                  </div>
                  <div>
                    Boris Johnson has also warned that the government “may have
                    to do more” if <br /> ministers feel current lockdown rules
                    are not enough to stem the current spike in <br />{" "}
                    coronavirus cases.
                  </div>
                  <div>
                    In the latest guidance update on moving homes, The Ministry
                    of Housing, <br /> Communities and Local Government (MHCLG)
                    has stated:
                  </div>
                  <div>
                    “It may become necessary to pause all home moves locally or
                    nationally <br /> for a short period of time to manage the
                    spread of coronavirus. We will <br /> let you know if this
                    needs to happen.”
                  </div>
                  <div>
                    However there is a different view that the the closure of
                    property market would <br /> significantly affect the
                    Nations’ economy, thus governement would be considering a{" "}
                    <br /> new plan to defend virus and keeping the property
                    market open.
                  </div>
                  <div>
                    The latest data from Halifax shows that, residential
                    property prices increased by 6% <br /> in 2020. The average
                    price of a property in the UK reached a record high of{" "}
                    <br /> £253,374 in December, up £14,295 year-on-year
                    (propertyindustryeye.com).
                  </div>
                  <div>
                    However, we shall soon hear from the Prime <br /> Minister
                    on the new guidance and plan to defend the coronavirus.
                  </div>
                  <div
                    className="md:flex md:gap-[1em] md:flex-col  sm:flex sm:gap-[1em] sm:flex-col"
                    style={
                      {
                        //   display: "flex",
                        //   alignItems: "center",
                        //   justifyContent: "center",
                        //   gap: "1em",
                        //   flexDirection: "column",
                      }
                    }
                  >
                    <Divider />
                    <div
                      className="md:flex md:items-center md:justify-evenly  sm:flex sm:items-center sm:justify-evenly"
                      style={
                        {
                          // display: "flex",
                          // alignItems: "center",
                          // justifyContent: "space-evenly",
                          // gap: "1em",
                        }
                      }
                    >
                      <ul
                        className="md:flex md:items-center md:justify-center md:list-none md:gap-[.5em]  sm:flex sm:items-center sm:justify-center sm:list-none sm:gap-[.5em]"
                        style={
                          {
                            //   display: "flex",
                            //   alignItems: "center",
                            //   justifyContent: "center",
                            //   gap: ".5em",
                            //   listStyle: "none",
                          }
                        }
                      >
                        <li>
                          {" "}
                          <IconButton
                            style={{ border: "1px solid rgb(37, 85, 169)" }}
                          >
                            <ArrowBack sx={{ color: "rgb(37, 85, 169)" }} />
                          </IconButton>
                        </li>
                        <li>Previous</li>
                      </ul>
                      <ul
                        className="md:flex md:items-center md:justify-center md:list-none md:gap-[.5em]  sm:flex sm:items-center sm:justify-center sm:list-none sm:gap-[.5em]"
                        // style={{
                        //   display: "flex",
                        //   alignItems: "center",
                        //   justifyContent: "center",
                        //   gap: ".5em",
                        //   listStyle: "none",
                        // }}
                      >
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
                      <ul
                        className="md:flex md:items-center md:justify-center md:list-none md:gap-[.5em]  sm:flex sm:items-center sm:justify-center sm:list-none sm:gap-[.5em]"
                        // style={{
                        //   display: "flex",
                        //   alignItems: "center",
                        //   justifyContent: "center",
                        //   gap: ".5em",
                        //   listStyle: "none",
                        // }}
                      >
                        <li>
                          {" "}
                          <IconButton
                            style={{ border: "1px solid rgb(37, 85, 169)" }}
                          >
                            <ArrowForward sx={{ color: "rgb(37, 85, 169)" }} />
                          </IconButton>
                        </li>
                        <li>Next</li>
                      </ul>
                    </div>
                    <Divider />
                  </div>
                </div>
              </div>
            </div>
            {/* ========================= */}
          </div>
        </div>

        {/* Footer */}
        <div
          className="md:basis-[20%] sm:basis-[18%]"
          style={{ background: "rgb(59, 55, 55)" }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TextRead1;
