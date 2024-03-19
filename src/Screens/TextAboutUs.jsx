import React from "react";
import judge from "../assets/HeadImages/about-main.jpg";
import BoxsOfPics from "../Components/BoxsOfPics/BoxsOfPics";
import { IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

//
import pic1 from "../assets/JudgesOnly/new3.jpeg";
import pic2 from "../assets/JudgesOnly/p3.jpeg";
import pic4 from "../assets/JudgesOnly/p4.jpeg";
import pic3 from "../assets/JudgesOnly/pi1.jpeg";
import pic5 from "../assets/JudgesOnly/law1-2.png";
import pic6 from "../assets/JudgesOnly/pi2.jpeg";
import pic7 from "../assets/JudgesOnly/new1.jpeg";
import pic8 from "../assets/JudgesOnly/new2.jpeg";
import Image from "../assets/HeadImages/A-Decade-of-Excellence.jpg";
import Footer from "../Components/Footer/Footer";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";

function TextAboutUs() {
  return (
    <>
      <div className="md:h-[520vh] md:w-[100%] md:flex md:flex-col    sm:h-[920vh] sm:w-[100%] sm:flex sm:flex-col">
        {/* Head */}
        <div
          className="md:basis-[1.5%]  sm:basis-[1.5%]"
          // style={{ background: "black" }}
        >
          <ScreenNavBar />
        </div>

        {/*Something About Us  */}
        <div
          className="md:basis-[30.5%] md:flex md:flex-row    sm:basis-[30.5%] sm:flex sm:flex-col"
          //   style={{ background: "pink" }}
        >
          {/* Left content */}
          <div
            className="md:basis-[50%] md:flex md:flex-col    sm:basis-[60%] sm:flex sm:flex-col"
            style={{ background: "rgb(28, 28, 143)" }}
          >
            <div className="md:basis-[50%] md:flex md:flex-col md:justify-center       sm:basis-[60%] sm:flex sm:flex-col sm:justify-center">
              {/* =============== */}
              <div
                className="md:grid md:place-content-center  md:gap-[1em]    sm:grid sm:place-content-center  sm:gap-[2em]"
                style={{
                  //   display: "grid",
                  //   placeContent: "center",
                  //   gap: "1em",
                  color: "white",
                  // background: "rgb(28, 28, 143)",
                }}
              >
                <div style={{ fontSize: "40px", color: "white" }}>
                  Something About Us
                </div>
                <div style={{ fontSize: "18px" }}>
                  Law and Lawyers was established in 2007 and has{" "}
                  <p>
                    {" "}
                    since achieved a number of laurels in its stellar history.
                    As a{" "}
                  </p>{" "}
                  Conveyancing Quality Scheme (CQS) accredited{" "}
                  <p>
                    {" "}
                    solicitors firm, we are also a Law Society Accedited{" "}
                  </p>{" "}
                  <p>
                    Law firm which is the gold standard in standards of
                  </p>{" "}
                  <p>practice for law firms in the United Kingdom.</p>{" "}
                </div>
              </div>
              {/* ============ */}
            </div>

            {/*  */}
            <div
              className="md:basis-[50%] md:flex md:flex-col    sm:basis-[40%] sm:flex sm:flex-col"
              style={{ background: "rgb(174, 168, 153)" }}
            >
              {/* ============ */}
              <div
                className="md:grid md:place-content-center md:gap-[2em] md:text-[18px]  sm:grid sm:place-content-center sm:gap-[2em] sm:text-[18px]"
                // style={{ background: "rgb(174, 168, 153)" }}
              >
                <div>
                  {" "}
                  We deliver professional legal service at an affordable{" "}
                  <p> cost. We guarantee personal attention to each client</p>
                  <p> through our dedicated case management system. </p>
                  Our promise is practical solutions that meet client’s
                  <p>
                    {" "}
                    objectives and ensure that any issues are resolved
                  </p>{" "}
                  <p>
                    {" "}
                    proactively through arbitration, litigation, negotiation
                  </p>
                  <p> or other suitable means. </p>{" "}
                </div>
                <div>
                  Established in the year 2007 with main areas{" "}
                  <p>of practice which was initially Immigration and</p>
                  <p> Conveyancing and we are now one of the leading</p> law
                  firms based in the heart of East London.{" "}
                  <p>We cater to the clients needs across United Kingdom.</p>
                </div>
              </div>
              {/* =========== */}
            </div>
          </div>

          {/* Right content */}
          <div
            className="md:basis-[50%] sm:basis-[40%]"
            style={{
              // background: "peru",
              backgroundImage: `url(${judge})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/*  */}
        <div
          className="md:basis-[31%] md:flex md:flex-col   sm:basis-[31%] sm:flex sm:flex-col"
          style={{ background: "rgb(174, 168, 153)" }}
        >
          {/* OUR TEAM */}
          <div
            className="md:basis-[30%] md:flex md:flex-col md:justify-center md:items-start   sm:basis-[30%] sm:flex sm:flex-col sm:justify-center sm:items-start"
            style={
              {
                //   flex: ".3",
                // background: "peru",
                //   display: "flex",
                //   justifyContent: "center",
                //   flexDirection: "column",
                //   alignItems: "flex-start",
              }
            }
          >
            <div
              className="md:grid md:place-content-center md:gap-[2em] md:pl-[10%]       sm:grid sm:place-content-center sm:gap-[2em] sm:pl-[10%]"
              style={
                {
                  // display: "grid",
                  // placeContent: "center",
                  // gap: "2em",
                  // paddingLeft: "10%",
                }
              }
            >
              <h1 style={{ color: "rgb(37, 85, 169)" }}> Our Team</h1>
              <div>
                Our team of experts will manage your law transaction{" "}
                <p>with great care and efficiency, ensuring that the</p> process
                goes smoothly and stress-free for you.
              </div>
              <div>
                <IconButton style={{ border: "1px solid rgb(37, 85, 169)" }}>
                  <ArrowForward sx={{ color: "rgb(37, 85, 169)" }} />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="md:basis-[70%] md:flex md:flex-row   sm:basis-[80%] sm:flex sm:flex-row">
            <div className="md:basis-[15%]  sm:basis-[0%]"></div>
            <div className="md:basis-[70%] md:flex md:flex-row   sm:basis-[100%] sm:flex sm:flex-col">
              {/* first group pic */}
              {/* background: "cyan"*/}
              <div
                className="md:basis-[35%]  md:flex md:flex-col "
                style={
                  {
                    // flex: ".35",
                    // display: "flex",
                    // flexDirection: "column",
                    //   background: "peru",
                  }
                }
              >
                <div
                  className="md:basis-[40%]  md:flex md:justify-end md:items-end md:p-[5px]"
                  style={
                    {
                      //   flex: ".4",
                      //   display: "flex",
                      //   alignItems: "end",
                      //   justifyContent: "flex-end",
                      //   padding: "5px",
                      // background: "red",
                    }
                  }
                >
                  {/* first image Image={pic1} */}
                  {/* <div className="md:h-[70%] md:w-[50%]"> */}
                  <BoxsOfPics
                    Image={pic1}
                    content={
                      "  Rita C. Stebbins is the Senior Partner of the firm and Head of Property and Probate team. She has a diverse clientele and specialises in Commercial and Residential Property Conveyancing. He is also the co-founder of the practice and has spent almost 20 years advising major clients in relation to acquisitions, disposals and property management.She is a philanthropist and has made generous contributions to the community and charities across the world. He is a motivational speaker and attends various community events to promote Organ Donation and Mental Health Awareness."
                    }
                    // content2={
                    //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                    // }
                    director={"Director"}
                    director1={"Director"}
                    view={"view Profile"}
                    name={"Rita C. Stebbins"}
                    names={" Rita C. Stebbins"}
                    image={pic1}
                  />
                  {/* </div> */}
                </div>
                <div
                  className="md:basis-[60%]"
                  // style={{
                  //   flex: ".6",
                  // }}
                >
                  {/* second image Image={pic2} */}
                  <div
                    className="md:h-[70%] md:w-[100%] md:flex md:justify-end md:items-start md:p-[5px]"
                    style={
                      {
                        // height: "70%",
                        // width: "100%",
                        // display: "flex",
                        // alignItems: "start",
                        // justifyContent: "flex-end",
                        // padding: "5px",
                      }
                    }
                  >
                    <BoxsOfPics
                      Image={pic2}
                      image={pic2}
                      content={
                        "  Carolann started his career as a Solicitor in 2007. She possesses extensive experience in the areas of Residential Conveyancing, Immigration and Family Law."
                      }
                      // content2={
                      //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                      // }
                      director={"Director"}
                      director1={"Director"}
                      view={"view Profile"}
                      name={"Carolann J."}
                      names={" Carolann J. Thorsen"}
                    />
                  </div>
                </div>
              </div>

              {/* second group pic */}
              {/* background: "brown"*/}
              <div
                className="md:basis-[30%] md:flex md:flex-col"
                style={
                  {
                    // flex: ".3",
                    // display: "flex",
                    //   background: "red",
                    // flexDirection: "column",
                  }
                }
              >
                <div
                  className="md:justify-center md:items-end md:flex md:basis-[50%]"
                  style={
                    {
                      //   flex: ".5",
                      //   display: "flex",
                      //   alignItems: "end",
                      //   justifyContent: "center",
                    }
                  }
                >
                  {/* third image Image={pic3} */}
                  <div
                    className="md:h-[90%] md:w-[100%] md:flex md:justify-end md:items-end md:p-[5px]"
                    style={
                      {
                        // height: "90%",
                        // width: "100%",
                        // display: "flex",
                        // alignItems: "end",
                        // justifyContent: "flex-end",
                        // padding: "5px",
                      }
                    }
                  >
                    <BoxsOfPics
                      Image={pic3}
                      image={pic3}
                      content={
                        "  Leonard is an experienced lawyer and provides legal consultation in Conveyancing, Immigration, Litigation & Family law."
                      }
                      // content2={
                      //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                      // }
                      director={"Director"}
                      director1={"Director"}
                      view={"view Profile"}
                      name={"Leonard Franklin"}
                      names={"Leonard Franklin"}
                    />
                  </div>
                </div>
                <div
                  className="md:justify-center md:items-start md:flex md:basis-[50%]"
                  style={
                    {
                      //   flex: ".5",
                      //   display: "flex",
                      //   alignItems: "start",
                      //   justifyContent: "center",
                      // background: "yellow",
                    }
                  }
                >
                  {/* four image Image={pic1} */}
                  <div
                    className="md:h-[80%] md:w-[100%] md:flex md:justify-end md:items-start md:p-[5px]"
                    style={
                      {
                        // height: "80%",
                        // width: "100%",
                        // display: "flex",
                        // alignItems: "start",
                        // justifyContent: "flex-end",
                        // padding: "5px",
                      }
                    }
                  >
                    <BoxsOfPics
                      Image={pic4}
                      image={pic4}
                      content={
                        "Betty has been practising as a Solicitor for over 10 years now. She specialises in Commercial and Residential Conveyancing. She completed her Masters (LLM) from University of Northampton."
                      }
                      // content2={
                      //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                      // }
                      director={"Director"}
                      director1={"Director"}
                      view={"view Profile"}
                      name={"Betty A. Powell"}
                      names={"Betty A. Powell"}
                    />
                  </div>
                </div>
              </div>

              {/* third group pic */}
              {/* background: "cyan"*/}
              <div
                className="md:basis-[30%]  md:flex md:flex-col"
                style={
                  {
                    // flex: ".3",
                    //   background: "brown",
                    // display: "flex",
                    //   background: "yellow",
                    // flexDirection: "column",
                  }
                }
              >
                <div
                  className="md:basis-[40%] md:w-[100%] md:flex md:justify-start md:items-end md:p-[5px]"
                  style={
                    {
                      //   flex: ".4",
                      //   display: "flex",
                      //   alignItems: "end",
                      //   justifyContent: "flex-start",
                      //   padding: "5px",
                    }
                  }
                >
                  {/* fifth image Image={pic2} */}
                  <BoxsOfPics
                    Image={pic5}
                    image={pic5}
                    content={
                      "Paul Radhakrishnan specialises in Public Law and Human Rights, with an emphasis on Immigration, Asylum, Nationality, EU and Regulatory law. He advises both corporate and private clients on a range of Immigration options."
                    }
                    // content2={
                    //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                    // }
                    director={"Director"}
                    director1={"Director"}
                    view={"view Profile"}
                    name={"Paul V. Rodriguez"}
                    names={"Paul V. Rodriguez"}
                  />
                </div>
                <div
                  className="md:basis-[60%]"
                  style={
                    {
                      //   flex: ".6",
                      // background: "red",
                    }
                  }
                >
                  {/* sixth image Image={pic1} */}
                  <div
                    className="md:h-[70%] md:w-[100%] md:flex md:justify-start md:items-start md:p-[5px]"
                    style={
                      {
                        // height: "70%",
                        // width: "100%",
                        // display: "flex",
                        // alignItems: "start",
                        // justifyContent: "flex-start",
                        // padding: "5px",
                      }
                    }
                  >
                    <BoxsOfPics
                      Image={pic6}
                      image={pic6}
                      content={
                        " Bethel is a practising Solicitor and has extesive experience in Commercial and Residential Conveyancing offering clients solutions to complex property matters."
                      }
                      // content2={
                      //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                      // }
                      director={"Director"}
                      director1={"Director"}
                      view={"view Profile"}
                      name={"Paul A. Bethel"}
                      names={"Paul A. Bethel"}
                    />
                  </div>
                </div>
              </div>

              {/* fourth group pic */}
              <div
                className="md:basis-[35%]  md:flex md:flex-col"
                style={
                  {
                    // flex: ".35",
                    // display: "flex",
                    // flexDirection: "column",
                    //   background: "red",
                    //   background: "black",
                  }
                }
              >
                <div
                  className="md:basis-[50%]  md:flex md:justify-start md:items-end"
                  style={
                    {
                      //   flex: ".5",
                      //   display: "flex",
                      //   alignItems: "end",
                      //   justifyContent: "center",
                    }
                  }
                >
                  {/* third image Image={pic3} */}
                  <div
                    className="md:h-[90%] md:w-[100%] md:flex md:justify-start md:items-end md:p-[5px]"
                    style={
                      {
                        // height: "90%",
                        // width: "100%",
                        // display: "flex",
                        // alignItems: "end",
                        // justifyContent: "flex-start",
                        // padding: "5px",
                      }
                    }
                  >
                    <BoxsOfPics
                      Image={pic7}
                      image={pic7}
                      content={
                        " Leopoldo C. Nichols specialises in Public Law and Human Rights, with an emphasis on Immigration, Asylum, Nationality, EU and Regulatory law. He advises both corporate and private clients on a range of Immigration options."
                      }
                      // content2={
                      //   " Leopoldo C. Nichols specialises in Public Law and Human Rights, with an emphasis on Immigration, Asylum, Nationality, EU and Regulatory law. He advises both corporate and private clients on a range of Immigration options."
                      // }
                      director={"Director"}
                      director1={"Director"}
                      view={"view Profile"}
                      name={"Leopoldo C. Nichols"}
                      names={"Leopoldo C. Nichols"}
                    />
                  </div>
                </div>
                <div
                  className="md:basis-[50%] md:flex"
                  style={
                    {
                      //   flex: ".5",
                      //   display: "flex",
                    }
                  }
                >
                  {/* four image Image={pic1} */}
                  <div
                    className="md:h-[85%] md:w-[100%] md:flex md:p-[5px]"
                    //   style={{
                    //     height: "85%",
                    //     width: "100%",
                    //     display: "flex",

                    //     padding: "5px",
                    //   }}
                  >
                    <BoxsOfPics
                      Image={pic8}
                      image={pic8}
                      content={
                        "Luis B. Meyer has been practising as a Solicitor for over 11 years now. His practise areas include Immigration Law, Wills and Probate."
                      }
                      // content2={
                      //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                      // }
                      director={"Director"}
                      director1={"Director"}
                      view={"view Profile"}
                      name={"Luis B. Meyer"}
                      names={"Luis B. Meyer"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:basis-[15%] sm:basis-[0%]"></div>
          </div>
        </div>
        {/* ==================== */}
        {/*  */}
        <div
          className="md:basis-[30%] md:flex md:flex-row    sm:basis-[20%] sm:flex sm:flex-col"
          style={{ background: "rgb(174, 168, 153)" }}
        >
          <div
            className="md:basis-[50%] md:flex md:flex-col   sm:basis-[50%] sm:flex sm:flex-col"
            style={
              {
                //   flex: ".5",
                // background: "pink",
                //   display: "flex",
                //   flexDirection: "column",
              }
            }
          >
            {/* A Decade Of Excellence */}
            <div
              className="md:basis-[20%] md:flex md:flex-col md:justify-center    sm:basis-[20%] sm:flex sm:flex-col sm:justify-center"
              style={
                {
                  // flex: ".2",
                  //   background: "red",
                  // display: "flex",
                  // justifyContent: "center",
                  // flexDirection: "column",
                }
              }
            >
              <div
                className="md:grid md:place-content-center md:gap-[2em]     sm:grid sm:place-content-center sm:gap-[2em]"
                style={{
                  //   display: "grid",
                  //   placeContent: "center",
                  //   gap: "2em",
                  color: "white",
                }}
              >
                <h1>A Decade Of Excellence</h1>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  <p>elit. Arcu aliquam vivamus neque in. Et cras sit dictum</p>
                  <p>purus, turpis vel sit nulla consectetur.</p>
                </div>
              </div>
            </div>

            <div
              className="md:basis-[60%] md:flex md:flex-col md:justify-center     sm:basis-[60%] sm:flex sm:flex-col sm:justify-center"
              style={
                {
                  // flex: ".6",
                  // background: "rgb(179, 124, 69)",
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "center",
                }
              }
            >
              {/* A Decade Of Excellence List  */}

              <div
                className="md:flex md:gap-[1em] md:justify-center    sm:flex sm:gap-[1em] sm:justify-center"
                style={
                  {
                    //   display: "flex",
                    //   gap: "1em",
                    //   justifyContent: "center",
                  }
                }
              >
                <div
                  className="md:w-[20vw] md:h-[50vh] md:flex md:justify-center md:items-center md:items-center md:text-[17px]    sm:text-[11px] sm:w-[100vw] sm:h-[50vh] sm:flex sm:justify-center sm:items-center sm:items-center"
                  style={{
                    background: "black",
                    // width: "20vw",
                    // height: "50vh",
                    color: "white",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // fontSize: "17px",
                    border: "white solid 1px",
                  }}
                >
                  Law and Lawyers was <br /> established in 2007 and has <br />{" "}
                  since achieved a number of <br /> laurels in its stellar
                  history. As a <br />
                  Conveyancing Quality Scheme <br /> (CQS) accredited solicitors{" "}
                  <br /> firm, we are also a Law Society <br /> Accedited Law
                  firm which is <br />
                  the gold standard in standards <br /> of practice for law
                  firms in the <br />
                  United Kingdom.
                </div>
                <div
                  className="md:w-[20vw] md:h-[50vh] md:mt-[5vh] md:flex md:justify-center md:items-center md:text-[17px]   sm:w-[100vw] sm:h-[50vh] sm:mt-[5vh] sm:flex sm:justify-center sm:items-center sm:text-[11px]"
                  style={{
                    background: "black",
                    // width: "20vw",
                    // height: "50vh",
                    // marginTop: "5vh",
                    color: "white",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // fontSize: "17px",
                    border: "white solid 1px",
                  }}
                >
                  We deliver professional legal
                  <br /> service at an affordable cost.
                  <br /> We guarantee personal <br />
                  attention to each client
                  <br /> through our dedicated case
                  <br /> management system. Our <br />
                  promise is practical solutions
                  <br /> that meet client’s objectives
                  <br /> and ensure that any issues are <br />
                  resolved proactively through <br />
                  arbitration, litigation,
                  <br /> negotiation or other suitable
                  <br /> means.
                </div>
              </div>
              <div
                className="md:flex md:gap-[1em] md:justify-center    sm:flex sm:gap-[1em] sm:justify-center"
                style={
                  {
                    //   display: "flex",
                    //   gap: "1em",
                    //   justifyContent: "center",
                  }
                }
              >
                <div
                  className="md:w-[20vw] md:h-[50vh]  md:flex md:justify-center md:items-center md:text-[17px]   sm:w-[100vw] sm:h-[50vh]  sm:flex sm:justify-center sm:items-center sm:text-[11px]"
                  style={{
                    background: "black",
                    // width: "20vw",
                    // height: "50vh",
                    // color: "white",
                    color: "white",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // fontSize: "17px",
                    border: "white solid 1px",
                  }}
                >
                  Established in the year 2007 <br /> with main areas of
                  practice
                  <br /> which was initially Immigration
                  <br /> and Conveyancing and we are <br />
                  now one of the leading law <br />
                  firms based in the heart of <br />
                  East London. We cater to the <br />
                  clients needs across United
                  <br /> Kingdom. Rest assured,
                  <br /> whatever your legal <br />
                  requirements are, you are in <br />
                  good hands.
                </div>
                <div
                  className="md:w-[20vw] md:h-[50vh] md:mt-[5vh]  md:flex md:justify-center md:items-center md:text-[17px]    sm:w-[100vw] sm:h-[50vh] sm:mt-[5vh]  sm:flex sm:justify-center sm:items-center sm:text-[11px]"
                  style={{
                    background: "black",
                    // width: "20vw",
                    // height: "50vh",
                    // marginTop: "5vh",
                    color: "white",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // fontSize: "17px",
                    border: "white solid 1px",
                  }}
                >
                  We are authorised and <br />
                  regulated by the Solicitors <br /> Regulatory Authority (SRA
                  ID: <br /> 613159) and accredited by <br /> Law Society’s
                  LEXCEL quality <br /> mark and Conveyancing <br />
                  Quality Scheme. Law and <br /> Lawyers Solicitors is a trading{" "}
                  <br />
                  name of Law and Lawyers Ltd.
                </div>
              </div>
            </div>
            {/* Image Background Here */}
            <div
              className="md:basis-[20%] sm:basis-[20%]"
              style={
                {
                  // flex: ".2",
                }
              }
            ></div>
          </div>
          {/* Right Section here */}
          <div
            className="md:basis-[50%] md:flex md:justify-end md:items-center     sm:basis-[50%] sm:flex sm:justify-end sm:items-center"
            style={
              {
                //   flex: ".5",
                // background: "red",
                //   display: "flex",
                //   justifyContent: "end",
                //   alignItems: "center",
              }
            }
          >
            <div
              className="md:h-[155vh] md:w-[45vw]   sm:h-[155vh] sm:w-[100vw]"
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // width: "45vw",
                // height: "155vh",
              }}
            ></div>
          </div>
        </div>
        {/* ==================== */}

        {/*  */}
        <div
          className="md:basis-[15%] sm:basis-[15%]"
          style={{ background: "rgb(59, 55, 55)" }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default TextAboutUs;
