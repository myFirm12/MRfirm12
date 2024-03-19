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

function TextRead4() {
  return (
    <div>
      <div className="md:h-[500vh] md:w-[100%] md:flex md:flex-col  sm:h-[750vh] sm:w-[100%] sm:flex sm:flex-col">
        {/* Head */}
        <div
          className="md:basis-[2%]  sm:basis-[1.7%]"
          // style={{ background: "black" }}
        >
          <ScreenNavBar />
        </div>

        {/* Convey */}
        <div
          className="md:basis-[8%] md:text-[40px] md:pl-[12%] md:items-center md:justify-start md:flex md:text-bold        sm:basis-[10.3%] sm:text-[40px] sm:pl-[12%] sm:items-center sm:justify-start sm:flex sm:text-bold"
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
              By Law And Lawyears, April 19, 2021
            </small>
            <div
              className="md:text-bold md:text-[40px]   sm:text-bold sm:text-[40px]"
              style={{
                color: "white",
              }}
            >
              New 95% mortgage scheme launches today
            </div>
          </div>
        </div>

        {/* Contents */}
        <div
          className="md:basis-[75%] md:flex md:flex-row  sm:basis-[81%] sm:flex sm:flex-col"
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
              className="md:flex md:basis-[100%] md:pt-[5%]  sm:flex sm:basis-[100%] sm:pt-[0%]"
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
                  className="md:flex md:gap-[1.5em] md:text-[17px]  md:flex-col  sm:flex sm:gap-[2em] sm:flex-col sm:text-[15px]"
                  //   style={{
                  //     display: "flex",
                  //     flexDirection: "column",
                  //     gap: "1.5em",
                  //     fontSize: "17px",
                  //   }}
                >
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    New 95% mortgage guarantee scheme launches today, available
                    on high <br /> streets across the country
                  </div>
                  <div>
                    The scheme was first announced at the 2021 Budget. The new
                    scheme will help first <br /> time buyers or current
                    homeowners secure a mortgage with just a 5% deposit to buy a
                    house of up to <br /> £600,000 – providing an affordable
                    route to home ownership <br /> for aspiring home-owners.
                  </div>
                  <div>
                    The government will offer lenders the guarantee they need to
                    provide mortgages <br /> that cover the other 95%, subject
                    to the usual affordability checks.
                  </div>
                  <div>
                    The scheme is now available from the following lenders on
                    high streets across the country,
                  </div>
                  <ul>
                    <li>Lloyds</li>
                    <li>Santander</li>
                    <li>Barclays</li>
                    <li>HSBC</li>
                    <li>NatWest</li>
                    <li>and Virgin Money following next month.</li>
                  </ul>
                  <div>
                    The COVID-19 pandemic has led to a reduction in the
                    availability of high loan-to- <br /> value (LTV) mortgage
                    products, particularly for prospective homebuyers with only
                    a <br /> 5% deposit. This has left many hard-working
                    households unable to get on to the <br /> housing ladder.
                  </div>
                  <div>
                    The mortgage guarantee scheme will support a new generation
                    in realising the <br /> dream of home ownership. This will
                    enable more households to access mortgages, <br /> without
                    the need for prohibitively large deposits.
                  </div>
                  <div>Housing Secretary Rt Hon Robert Jenrick MP said:</div>
                  <div
                    className="md:w-[45vw] md:h-[45vh]  sm:w-[100vw] sm::h-[45vh]"
                    style={{
                      // width: "45vw",
                      // height: "35vh",
                      background: "wheat",
                    }}
                  >
                    <div>
                      “For too many people, no matter how hard they work, home
                      ownership can <br /> seem out of reach. One of the biggest
                      divides in our country has been <br /> between those who
                      can afford their own home and those who cannot.”
                    </div>
                    <div>
                      “That’s why we are determined to do everything we can to
                      help hard-working <br /> families and prospective
                      first-time buyers get their feet on the housing ladder{" "}
                      <br /> in an easy and affordable way, to level up this
                      country.”
                    </div>
                    <div>
                      “The new mortgage guarantee scheme which comes into effect
                      today will <br /> give providers the confidence to lend
                      and help families and young people get <br /> on the
                      property ladder without the prohibitive burden of a large
                      deposit.”
                    </div>
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    {" "}
                    How does it Work?
                  </div>

                  <div>
                    {" "}
                    The government will provide lenders with the <br /> option
                    to purchase a guarantee on the top-slice of the mortgage. In
                    other words, the <br /> government will compensate the
                    mortgage lender for a portion of the net losses suffered in
                    the event of repossession. The guarantee will apply down to
                    80% of the purchase value of the <br /> guaranteed property.
                  </div>

                  <div>
                    {" "}
                    The guarantee will be valid for up to 7 years after the
                    mortgage is originated, <br /> evidence shows that loans are
                    unlikely to default after such a period has elapsed.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    {" "}
                    How long is the Scheme valid for?
                  </div>
                  <div>
                    The scheme is intended as a temporary measure. It will be
                    open for new mortgage <br /> applications from April 2021 to
                    December 2022, in line with the government’s view <br />{" "}
                    that the current scarcity of high loan-to-value lending is
                    primarily a response to the <br />
                    pandemic rather than a symptom of a longer-term structural
                    change in the <br /> mortgage market.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{
                      fontWeight: "bolder",
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    Susan Allen, CEO Retail and Business Banking at Santander
                    said:
                  </div>
                  <div
                    className="md:w-[45vw] md:h-[45vh] md:flex md:flex-col md:gap-[.5em] md:justify-center md:items-center    sm:w-[100vw] sm:h-[25vh] sm:flex sm:flex-col sm:gap-[1em] sm:justify-center sm:items-center"
                    style={{
                      //   width: "45vw",
                      //   height: "35vh",
                      background: "wheat",
                      //   display: "flex",
                      //   flexDirection: "column",
                      //   gap: ".5em",
                      //   justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <div>
                      “We know that raising a large deposit can often be
                      challenging for potential <br /> home buyers, so we’re
                      pleased to be part of the government’s Mortgage <br />{" "}
                      Guarantee Scheme offering a range of 95% mortgages to help
                      both first-time <br /> buyers and home movers.”
                    </div>
                    <div>
                      “As one of the UK’s largest mortgage lenders we see how
                      important <br /> homeownership is to our customers and we
                      use our wide experience and <br /> expertise to support
                      them throughout the home buying process.”
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    Michelle Andrews, HSBC UK’s Head of Buying A Home said:
                  </div>
                  <div
                    className="md:w-[45vw] md:h-[45vh] md:flex md:flex-col md:gap-[.5em] md:justify-center md:items-center  sm:w-[100vw] sm:h-[25vh] sm:flex sm:flex-col sm:gap-[1em] sm:justify-center sm:items-center"
                    style={{
                      //   width: "45vw",
                      //   height: "35vh",
                      background: "wheat",
                      //   display: "flex",
                      //   flexDirection: "column",
                      //   gap: ".5em",
                      //   justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    <div>
                      “We have supported home buyers and the wider housing
                      market throughout <br /> the pandemic and are excited to
                      support the Mortgage Guarantee Scheme.”
                    </div>
                    <div>
                      “After such a turbulent year it is great that this scheme
                      will make a real <br /> difference in enabling first time
                      buyers who didn’t think they would have a <br /> chance of
                      getting a mortgage and home movers to get the keys to
                      their new <br /> home.”
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
          className="md:basis-[15%] sm:basis-[12%]"
          style={{ background: "rgb(59, 55, 55)" }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TextRead4;
