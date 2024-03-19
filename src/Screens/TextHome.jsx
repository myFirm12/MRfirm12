import React from "react";
import video from "../assets/HeadImages/5120123_Human_Person_People_1280x720.mp4";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import { IconButton } from "@mui/material";
import { ArrowForward, ArrowOutward } from "@mui/icons-material";

//
import pic1 from "../assets/JudgesOnly/jag.jpeg";
import pic2 from "../assets/JudgesOnly/p3.jpeg";
import pic4 from "../assets/JudgesOnly/p4.jpeg";
import pic3 from "../assets/JudgesOnly/pi1.jpeg";
import pic5 from "../assets/JudgesOnly/law1-2.png";
import pic6 from "../assets/JudgesOnly/pi2.jpeg";
import BoxsOfPics from "../Components/BoxsOfPics/BoxsOfPics";
import UnderlinedText from "../Components/UnderlinedText/UnderlinedText";
import judge from "../assets/HeadImages/still-life-with-scales-justice.jpg";
import LatestNewsComponent from "../Components/LatestNews/LatestNewsComponent";
import ContactsForm from "../Components/Contacts&Form/Contacts&Form";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

function TextHome() {
  return (
    <div
      className="md:w-[100%] md:h-[700vh] md:flex md:flex-col  sm:w-[100%] sm:h-[950vh] sm:flex sm:flex-col"
      style={{
        background: "rgb(230, 225, 225)",
      }}
    >
      {/* Head  flex: ".014"*/}
      <div
        className="md:basis-[1.5%] sm:basis-[1%] "
        style={{ background: "rgb(230, 225, 225)" }}
      >
        <ScreenNavBar />
      </div>

      {/* Video  flex: ".106",*/}
      <div
        className="md:basis-[12.5%] md:overflow-hidden  sm:basis-[3.5%] sm:overflow-hidden"
        style={{ background: "rgb(230, 225, 225)" }}
      >
        <video
          autoPlay
          loop
          muted
          className="video-background md:w-[100%] sm:w-[100%]"
          style={{ background: "rgb(230, 225, 225)" }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      {/* Our Team  flex: ".2",*/}
      <div
        className="md:basis-[21%] md:flex md:flex-row   sm:basis-[24%] sm:flex sm:flex-col"
        style={{
          background: "rgb(230, 225, 225)",
        }}
      >
        {/*  Left side of our team*/}
        <div className="md:basis-[45%] md:pt-[10%]  sm:basis-[25%] sm:pt-[10%]">
          <div
            className="md:grid md:place-content-center md:gap-[2em]     sm:grid sm:place-content-center sm:gap-[2em]"
            style={
              {
                // display: "grid",
                // placeContent: "center",
                // gap: "2em",
              }
            }
          >
            <h1
              className="md:text-[20px] md:font-extrabold  sm:text-[20px] sm:font-extrabold"
              style={{ color: "rgb(37, 85, 169)" }}
            >
              Our Team
            </h1>
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

        {/*  Right side of our team*/}
        <div className="md:basis-[55%] md:flex md:flex-row     sm:basis-[75%] sm:flex sm:flex-col">
          {/* first group pic */}
          {/* background: "cyan"*/}
          <div
            className="md:flex md:flex-col md:basis-[34%]  sm:flex sm:flex-col sm:basis-[34%]"
            style={
              {
                //   background: "brown",
                //   flex: ".34",
                //   display: "flex",
                //   flexDirection: "column",
              }
            }
          >
            <div
              className="md:basis-[40%] md:flex md:items-end md:justify-end md:p-[5px]   sm:basis-[50%] sm:flex sm:items-end sm:justify-end sm:p-[5px]"
              style={
                {
                  // flex: ".4",
                  // display: "flex",
                  // alignItems: "end",
                  // justifyContent: "flex-end",
                  // padding: "5px",
                  // background: "yellow",
                }
              }
            >
              {/* first image */}
              <BoxsOfPics
                Image={pic1}
                content={
                  "Stebbins is the Senior Partner of the firm and Head of Property and Probate team. She has a diverse clientele and specialises in Commercial and Residential Property Conveyancing. She is also the co-founder of the practice and has spent almost 20 years advising major clients in relation to acquisitions, disposals and property management. She is a philanthropist and has made generous contributions to the community and charities across the world. She is a motivational speaker and attends various community events to promote 'Organ Donation' and Mental Health Awarenes"
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
            </div>
            <div className="md:basis-[60%] sm:basis-[50%]">
              {/* second image */}
              <div
                className="md:h-[70%] md:w-[100%] md:flex md:items-start md:justify-end md:p-[5px]    sm:h-[70%] sm:w-[100%] sm:flex sm:items-start sm:justify-end sm:p-[5px]"
                style={
                  {
                    //   height: "70%",
                    //   width: "100%",
                    //   display: "flex",
                    //   alignItems: "start",
                    //   justifyContent: "flex-end",
                    //   padding: "5px",
                    //   background: "green",
                  }
                }
              >
                <BoxsOfPics
                  Image={pic2}
                  image={pic2}
                  content={
                    " Carolann started his career as a Solicitor in 2007. She possesses extensive experience in the areas of Residential Conveyancing, Immigration and Family Law."
                  }
                  // content2={
                  //   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam sint quam nihil blanditiis voluptatibus perspiciatis, molestiae ipsa nam reiciendis, consequuntur pariatur. Quam ex eligendi, unde fugiat commodi voluptas veritatis!"
                  // }
                  director={"Director"}
                  director1={"Director"}
                  view={"view Profile"}
                  name={"Carolann J. Thorsen"}
                  names={" Carolann J. Thorsen"}
                />
              </div>
            </div>
          </div>

          {/* second group pic */}
          {/* background: "brown"*/}
          <div
            className="md:basis-[33%] md:flex md:flex-col  sm:basis-[33%] sm:flex sm:flex-col"
            style={
              {
                //   background: "red",
                //   flex: ".33",
                //   display: "flex",
                //   flexDirection: "column",
              }
            }
          >
            <div
              className="md:basis-[50%] md:flex md:items-end md:justify-center   sm:basis-[50%] sm:flex sm:items-end sm:justify-center"
              style={
                {
                  // flex: ".5",
                  // display: "flex",
                  // alignItems: "end",
                  // justifyContent: "center",
                }
              }
            >
              {/* third image */}
              <div
                className="md:h-[80%] md:w-[100%] md:flex md:items-end md:justify-center md:p-[5px]   sm:h-[80%] sm:w-[100%] sm:flex sm:items-end sm:justify-center sm:p-[5px]"
                style={
                  {
                    //   height: "80%",
                    //   width: "100%",
                    //   display: "flex",
                    //   alignItems: "end",
                    //   justifyContent: "center",
                    //   padding: "5px",
                  }
                }
              >
                <BoxsOfPics
                  Image={pic3}
                  image={pic3}
                  content={
                    " Leonard is an experienced lawyer and provides legal consultation in Conveyancing, Immigration, Litigation & Family law."
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
              className="md:basis-[50%] md:flex md:items-start md:justify-center    sm:basis-[50%] sm:flex sm:items-start sm:justify-center"
              style={
                {
                  // flex: ".5",
                  // display: "flex",
                  // alignItems: "start",
                  // justifyContent: "center",
                }
              }
            >
              {/* four image */}
              <div
                className="md:h-[80%] md:w-[100%] md:flex md:items-start md:justify-center md:p-[5px]     sm:h-[80%] sm:w-[100%] sm:flex sm:items-start sm:justify-center sm:p-[5px]"
                style={
                  {
                    //   height: "80%",
                    //   width: "100%",
                    //   display: "flex",
                    //   alignItems: "start",
                    //   justifyContent: "center",
                    //   padding: "5px",
                  }
                }
              >
                <BoxsOfPics
                  Image={pic4}
                  image={pic4}
                  content={
                    " Betty has been practising as a Solicitor for over 10 years now. She specialises in Commercial and Residential Conveyancing. She completed her Masters (LLM) from University of Northampton."
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
            className="md:basis-[36%] md:flex md:flex-col  sm:basis-[36%] sm:flex sm:flex-col"
            style={
              {
                //   background: "blue",
                //   flex: ".36",
                //   display: "flex",
                //   flexDirection: "column",
              }
            }
          >
            <div
              className="md:basis-[40%] md:flex md:items-end md:justify-start md:p-[5px]   sm:basis-[40%] sm:flex sm:items-end sm:justify-start sm:p-[5psm"
              style={
                {
                  // flex: ".4",
                  // display: "flex",
                  // alignItems: "end",
                  // justifyContent: "flex-start",
                  // padding: "5px",
                }
              }
            >
              {/* fifth image */}
              <BoxsOfPics
                Image={pic5}
                image={pic5}
                content={
                  " Paul Radhakrishnan specialises in Public Law and Human Rights, with an emphasis on Immigration, Asylum, Nationality, EU and Regulatory law. He advises both corporate and private clients on a range of Immigration options."
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
              style={{
                flex: ".6",
                // background: "yellow",
              }}
            >
              {/* sixth image */}
              <div
                style={{
                  height: "70%",
                  width: "100%",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "flex-start",
                  padding: "5px",
                }}
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
        </div>
      </div>

      {/* For individuals and Business */}
      <div
        className="md:basis-[18%] md:flex md:flex-row    sm:basis-[18%] sm:flex sm:flex-col"
        style={{ background: "rgb(230, 225, 225)" }}
      >
        {/* For Individuals */}
        <div
          className="md:basis-[50%] md:flex md:flex-col   sm:basis-[50%] sm:flex sm:flex-col "
          style={
            {
              // flex: ".5",
              //   background: "cyan",
              // display: "flex",
              // flexDirection: "column",
            }
          }
        >
          <div
            className="md:basis-[30%] md:flex md:flex-col md:justify-center      sm:basis-[30%] sm:flex sm:flex-col sm:justify-center "
            style={
              {
                // flex: ".3",
                // background: "brown",
                // display: "flex",
                // justifyContent: "center",
                // flexDirection: "column",
              }
            }
          >
            <div
              className="md:grid md:place-content-center md:gap-[2em]   sm:grid sm:place-content-center sm:gap-[.5em] "
              style={
                {
                  // display: "grid",
                  // placeContent: "center",
                  // gap: "2em",
                }
              }
            >
              <h1
                className="md:text-[20px] md:font-bold    sm:text-[25px] sm:font-bold"
                style={{ color: "rgb(37, 85, 169)" }}
              >
                For Individuals
              </h1>
              <div className="md:text-[20px] sm:text-[16px]">
                Our experienced personal law solicitors team is ready{" "}
                <p>to help you with the claims. We have an excellent </p> career
                record in winning ratios
              </div>
            </div>
          </div>
          <div
            className="md:flex md:justify-start md:flex-col md:items-center  md:gap-[.5em] md:basis-[70%]    sm:flex sm:justify-start sm:flex-col sm:items-center  sm:gap-[.5em]  sm:basis-[70%]"
            style={
              {
                // flex: "7",
                // background: "pink",
                // display: "flex",
                // justifyContent: "start",
                // flexDirection: "column",
                // alignItems: "center",
                // gap: ".5em",
              }
            }
          >
            <UnderlinedText
              name={"Residential Conveyancing"}
              icon={<ArrowOutward />}
            />
            <UnderlinedText name={"Immigration"} icon={<ArrowOutward />} />
            <UnderlinedText
              name={"Wills and Probate"}
              icon={<ArrowOutward />}
            />
            <UnderlinedText name={"Employment"} icon={<ArrowOutward />} />
            <UnderlinedText
              name={"Landlord and Tenant"}
              icon={<ArrowOutward />}
            />
            <UnderlinedText name={"Family"} icon={<ArrowOutward />} />
            <UnderlinedText
              name={"Dispute Resolution"}
              icon={<ArrowOutward />}
            />
          </div>
        </div>

        {/* For Businesses */}
        <div
          className="md:basis-[50%] md:flex md:flex-col   sm:basis-[50%] sm:flex sm:flex-col "
          style={{
            // flex: ".5",
            background: "rgb(174, 168, 153)",
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <div
            className="md:flex md:basis-[30%] md:justify-center md:flex-col      sm:flex sm:basis-[30%] sm:justify-center sm:flex-col"
            style={
              {
                // flex: "3",
                // display: "flex",
                // justifyContent: "center",
                // flexDirection: "column",
              }
            }
          >
            <div
              className="md:place-content-center md:grid md:gap-[2em]   sm:place-content-center sm:grid sm:gap-[1em]"
              style={{
                // display: "grid",
                // placeContent: "center",
                // gap: "2em",
                fontWeight: 200,
              }}
            >
              <h1
                style={{ color: "rgb(37, 85, 169)" }}
                className="md:text-[20px] md:font-bold   sm:text-[25px] sm:font-bold"
              >
                For Businesses
              </h1>
              <div className="md:text-[20px] sm:text-[16px]">
                We have extensive experience in commercial{" "}
                <p> law handling and managing suits. Our dedicated</p>{" "}
                commercial law team is always open to conversing{" "}
                <p>with the client.</p>
              </div>
            </div>
          </div>
          <div
            className="md:flex md:justify-start md:flex-col md:items-center  md:gap-[.5em] md:basis-[70%]      sm:flex sm:justify-center sm:flex-col sm:items-center  sm:gap-[.5em] sm:basis-[70%]"
            style={
              {
                // flex: "7",
                // display: "flex",
                // justifyContent: "start",
                // flexDirection: "column",
                // alignItems: "center",
                // gap: ".5em",
              }
            }
          >
            <UnderlinedText
              name={"Commercial Conveyancing"}
              icon={<ArrowOutward />}
            />
            <UnderlinedText
              name={"Corporate Immigration Services"}
              icon={<ArrowOutward />}
            />
            <UnderlinedText name={"Employment Law"} icon={<ArrowOutward />} />
            <UnderlinedText
              name={"Dispute Resolution"}
              icon={<ArrowOutward />}
            />
          </div>
        </div>
      </div>

      {/* Get a convey. Q */}
      <div
        className="md:basis-[6%] md:bg-no-repeat md:flex md:flex-col md:justify-center md:items-center md:gap-[1em] sm:flex sm:basis-[3%] sm:flex-col sm:justify-center sm:items-center sm:gap-[.5em] sm:bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(92,53,47,1) 27%, rgba(92,70,47,0.9710477941176471) 51%, rgba(92,70,47,0.5004595588235294) 78%), url("${judge}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Get a conveyancing quote</h1>
        <Link
          to="/get-quote"
          style={{ textDecoration: "none", color: "white" }}
        >
          <button
            className="md:w-[100%] md:h-[6vh] md:w-[15vw]    sm:w-[12vw] sm:w-[100%] sm:h-[6vh]"
            // style={{ width: "10%", height: "6vh" }}
            style={{ background: "rgb(28, 28, 143)", color: "white" }}
          >
            Click here
          </button>
        </Link>
      </div>
      {/* Latest News */}
      <div
        className="md:basis-[22%] sm:basis-[22%]"
        style={{ background: "black" }}
      >
        <LatestNewsComponent />
      </div>

      {/* Contacts and forms */}
      <div
        className="md:basis-[17%] sm:basis-[19%]"
        style={{ background: "rgb(230, 225, 225)" }}
      >
        <ContactsForm />
      </div>

      {/* Footer */}
      <div
        className="md:basis-[12%] sm:basis-[10%]"
        style={{ background: "rgb(59, 55, 55)" }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default TextHome;
