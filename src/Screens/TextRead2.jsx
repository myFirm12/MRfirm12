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

function TextRead2() {
  return (
    <>
      <div className="md:h-[440vh] md:w-[100%] md:flex md:flex-col  sm:h-[731vh] sm:w-[100%] sm:flex sm:flex-col">
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
              By Law And Lawyears, June 3, 2019
            </small>
            <div
              className="md:text-bold md:text-[40px]   sm:text-bold sm:text-[40px]"
              style={{
                color: "white",
              }}
            >
              What is Conveyancing?
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
                  <div>
                    Law and Lawyers Ltd, Conveyancing Solicitors in East London
                  </div>
                  <div>03 June 2019</div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    Conveyancing Explained
                  </div>
                  <div>
                    Conveyancing is the legal transfer of property from one
                    owner to another. The <br /> conveyancing process starts
                    when a buyers’ offer on a property gets accepted by <br />{" "}
                    the seller. The legal process continues until the buyer get
                    the property keys.
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
                    The conveyancing process should be carried out by a
                    conveyancing solicitor or a <br /> licensed conveyancer who
                    acts on behalf of the buyer or the seller. Conveyancing{" "}
                    <br /> includes the entire legal and administrative work
                    required to ensure a house <br /> purchase is valid under
                    law.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    What will your conveyancing solicitor do for you?
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    Initial paperwork and draft contract
                  </div>
                  <div>
                    After the offer has been accepted, the sellers’ solicitor
                    will draft the contract doing <br /> necessary checks and
                    send it to buyers’ solicitor. The contract outlines the
                    conditions of the <br /> sale, terms of the deal, property
                    details and information.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    Pre-contract enquires from the buyers’ solicitor
                  </div>
                  <div>
                    At this stage the buyers’ solicitor would have received the
                    contract pack from the <br /> sellers’ solicitor. Buyers’
                    solicitor will now analyse the draft contract, title deeds
                    and <br /> the forms and do preliminary check on the
                    property and its current owner. If any <br />
                    questions arise after the thorough analysis, the buyers’
                    solicitor will raise the <br /> enquiries to the sellers’
                    solicitor.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    Organising a Survey and Searches
                  </div>
                  <div>
                    Next comes the survey, which will be organised by the
                    buyers’ solicitor. The survey <br /> will check the state of
                    the building, the condition of the surrounding land, <br />{" "}
                    assessment of external factors such as drainage systems and
                    local developments <br /> planned for the near future etc.
                  </div>
                  <div>
                    The buyers’ solicitor will then carry out the necessary
                    local authority searches in <br /> relation to the property
                    and analyse the results of the local authority searches. The{" "}
                    <br /> searches will include checking outstanding issues
                    with the local authority, including <br /> planning, flood
                    risk, contaminated land and other environmental issues.
                  </div>
                  <div>
                    Both sellers’ and buyers’ solicitors will negotiate terms on
                    the draft contract. Once <br /> all searches have been
                    received and answers to all enquiries have been answered{" "}
                    <br /> satisfactorily, the contract will become official and
                    both parties will sign in readiness <br /> for exchange.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    Mortgage offer
                  </div>
                  <div>
                    If you are buying property on mortgage, a formal mortgage
                    offer will have been <br /> received from the lender at this
                    stage. The solicitor will go through the conditions <br />{" "}
                    mentioned in the mortgage offer and invite the buyer to sign
                    the mortgage deed. <br /> The solicitor will normally
                    undertake legal work on behalf of the lender as well.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    Exchange of contracts
                  </div>
                  <div>
                    At this point contracts are exchanged; the buyers’ solicitor
                    will send the deposit <br /> monies to the sellers’
                    solicitor.
                  </div>
                  <div>
                    All parties involved will agree on a completion date at this
                    stage. Once the contracts <br /> are exchanged between the
                    respective solicitors and the buyer legally bound to buy,{" "}
                    <br /> and the seller bound to sell the property. Should
                    either party pull out, the other will <br /> be entitled to
                    claim compensation for breach of contract.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    After the Exchange
                  </div>
                  <div>
                    The buyers’ solicitor will draw up the Transfer Deed so that
                    the property can be <br /> registered in property buyers
                    name after completion.
                  </div>
                  <div>
                    If buying on mortgage, the buyers’ solicitor will order the
                    mortgage monies in time <br /> for completion from the
                    lender. The solicitor will also do some final searches in
                    land <br /> registry on behalf of the lender.
                  </div>
                  <div
                    className="md:text-[20px] sm:text-[15px]"
                    style={{ fontWeight: "bolder" }}
                  >
                    Completion
                  </div>
                  <div>
                    On the completion date the sellers move out of the property
                    and buyer solicitor <br /> settle the balance of the money
                    that was due. Once it is settled and confirmed by <br /> the
                    seller solicitor, the seller should release the keys to the
                    buyer.
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
    </>
  );
}

export default TextRead2;
