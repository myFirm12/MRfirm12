import React from "react";
import Footer from "../Components/Footer/Footer";
import { Divider, IconButton } from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import pic1 from "../assets/HeadImages/law.jpg";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";

function TextRead3() {
  return (
    <div>
      <div className="md:h-[440vh] md:w-[100%] md:flex md:flex-col  sm:h-[560vh] sm:w-[100%] sm:flex sm:flex-col">
        {/* Head */}
        <div
          className="md:basis-[2%]  sm:basis-[1.7%]"
          // style={{ background: "black" }}
        >
          <ScreenNavBar />
        </div>

        {/* Convey */}
        <div
          className="md:basis-[10%] md:text-[40px] md:pl-[12%] md:items-center md:justify-start md:flex md:text-bold        sm:basis-[10.3%] sm:text-[40px] sm:pl-[12%] sm:items-center sm:justify-start sm:flex sm:text-bold"
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
              By Law And Lawyears, June 6, 2016
            </small>
            <div
              className="md:text-bold md:text-[40px]   sm:text-bold sm:text-[40px]"
              style={{
                color: "white",
              }}
            >
              UK to expand skilled occupations list
            </div>
          </div>
        </div>

        {/* Contents */}
        <div
          className="md:basis-[68%] md:flex md:flex-row  sm:basis-[70%] sm:flex sm:flex-col"
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
                  <div>Law and Lawyers, Immigration Lawyers in East London</div>
                  <div>04 June 2019</div>
                  <div>
                    The Migration Advisory Committee (MAC) has published its
                    review of the shortage <br /> occupation list (SOL) on 29th
                    March 2019.
                  </div>
                  <div>
                    According to Financial Times, “The Migration Advisor
                    Committee urges <br />
                    migrants who are biochemists, architects and web designers
                    should be able to <br /> jump the queue when applying for
                    skilled worker visas”.
                  </div>
                  <div>
                    Overseas professionals such as web designers, architects and
                    biochemist should be <br /> given priority access to the UK
                    to overcome the growing skills shortage, government <br />{" "}
                    advisers advised on 29th May 2019.
                  </div>
                  <div>
                    The Migration Advisory Committee recommendations would
                    increase the number of <br /> professionals from outside the
                    EU. Under the new recommendations, the jobs such <br /> as
                    veterinary surgeons, speech and language therapists and
                    psychologists would be <br /> added to the Home Office’s
                    list of “shortage occupations”. This move will make <br />
                    easier for the above professionals to secure a UK visa.
                  </div>
                  <div>
                    Some job areas in the shortage list could be expanded, to
                    include all medical <br /> practitioners instead of just
                    nurses, broadening the computer programmers job <br /> area,
                    web developers, and civil and mechanical engineers. The
                    Migration Advisor <br /> Committee added that, this is due
                    to the “increasing difficulty” faced by the UK <br />
                    employers in recruiting certain job roles.
                  </div>
                  <div>
                    The estimate shows, there were 846,000 job vacancies in the
                    three months to <br /> March, which is 28,000 more than the
                    previous year. According to Financial Times, <br /> “nearly
                    one in three job vacancies were in health and social work or
                    retail.
                    <div>
                      {" "}
                      For the full review of the shortage occupation list by the
                      Migration Advisory <br />
                      Committee (MAC)
                    </div>
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

export default TextRead3;
