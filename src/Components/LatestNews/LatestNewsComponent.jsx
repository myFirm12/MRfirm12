import { ArrowForward } from "@mui/icons-material";
import React from "react";
import coins from "../../assets/HeadImages/close-up-man-showing-stack-golden-bitcoins.jpg";
import ReadMoreList from "../ReadMoreList/ReadMoreList";
import { Divider, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LatestNewsComponent() {
  const navigate = useNavigate();
  const read1 = () => {
    navigate("/Could_tighter_restrictions_mean_home_moves_has_to_stop");
  };
  const read2 = () => {
    navigate("/read_conveyancing");
  };
  const read4 = () => {
    navigate("/UK_to_expand_skilled_occupations_list");
  };
  const read3 = () => {
    navigate("/New_95_mortgage_scheme_launches_today");
  };
  return (
    <>
      <div
        className="md:basis-[80%] md:flex md:flex-col md:h-[100%]    sm:basis-[80%] sm:flex sm:flex-col sm:h-[100%]"
        style={
          {
            // flex: ".80",
            // background: "red",
            // display: "flex",
            // flexDirection: "column",
            // height: "100%",
          }
        }
      >
        <div
          className="md:flex md:flex-col md:justify-center md:basis-[20%]   sm:flex sm:flex-col sm:justify-center sm:basis-[20%]"
          style={
            {
              // flex: ".2",
              //   background: "black",
              // display: "flex",
              // justifyContent: "center",
              // flexDirection: "column",
            }
          }
        >
          <div
            className="md:grid md:place-content-start md:gap-[1em] md:pl-[10%]   sm:grid sm:place-content-start sm:gap-[1em] sm:pl-[10%]"
            style={{
              // display: "grid",
              // placeContent: "flex-start",
              // gap: "1em",
              // paddingLeft: "10%",
              color: "white",
            }}
          >
            <h1>Latest News</h1>
            <div>
              The latest industry-related news and law updates can be found
              here.
            </div>
            <div>
              <IconButton style={{ border: "1px solid white" }}>
                <ArrowForward sx={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
        </div>
        <div
          className="md:basis-[80%] md:flex md:flex-row   sm:basis-[80%] sm:flex sm:flex-col"
          style={
            {
              // flex: ".8",
              //   background: "pink",
              // display: "flex",
              // flexDirection: "row",
            }
          }
        >
          {/* Right image with coin */}
          <div
            className="md:basis-[50%] md:flex md:flex-col    sm:basis-[30%] sm:flex sm:flex-col"
            style={
              {
                // flex: ".5",
                // display: "flex",
                // flexDirection: "column",
              }
            }
          >
            <div
              className="md:basis-[80%] md:pl-[-4%]    sm:basis-[95%] sm:pl-[0%]"
              style={{
                // flex: ".8",
                backgroundImage: `url(${coins})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // paddingLeft: "-4%",
              }}
            >
              <div
                className="md:w-[40%] md:h-[40vh] md:absolute md:mt-[27.7%] md:ml-[10%] md:flex  md:justify-center md:p-[15px]     sm:w-[95%] sm:h-[25vh] sm:absolute sm:mt-[20%] sm:ml-[5%] sm:flex  sm:justify-center sm:p-[15px]"
                style={{
                  // width: "40%",
                  // height: "40vh",
                  background: "peru",
                  // position: "absolute",
                  // marginTop: "27.7%",
                  // marginLeft: "10%",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // padding: "15px",
                }}
              >
                <ReadMoreList
                  date={"By Law And Lawyears, January 12, 2021"}
                  head={"Could tighter restrictions "}
                  headparagraph={"mean home moves has to"}
                  content1={
                    "Law and Lawyers Ltd, Conveyancing Solicitors in East London "
                  }
                  content2={
                    "The new covid strain is spreading rapidly across the UK that the goverment w.."
                  }
                  Readmore={"Readmore"}
                  handleRead={read3}
                />
              </div>
            </div>
            <div className="md:basis-[20%]  sm:basis-[5%]"></div>
          </div>

          {/* Left convey. List */}
          <div
            className="md:basis-[50%] md:flex md:justify-start md:items-start md:flex-col md:gap-[5em] md:pl-[4%]    sm:basis-[70%] sm:flex sm:justify-center sm:items-center sm:flex-col sm:gap-[5em] sm:pl-[4%]"
            style={
              {
                // flex: ".5",
                // display: "flex",
                // justifyContent: "start",
                // alignItems: "start",
                // flexDirection: "column",
                // gap: "5em",
                // paddingLeft: "4%",
              }
            }
          >
            <ReadMoreList
              date={"By Law And Lawyears, January 12, 2021"}
              head={"Could tighter restrictions "}
              headparagraph={"mean home moves has to"}
              content1={
                "Law and Lawyers Ltd, Conveyancing Solicitors in East London "
              }
              content2={
                "The new covid strain is spreading rapidly across the UK that the goverment w.."
              }
              divider={
                <Divider
                  className="md:w-[80%] sm:w-[85%]"
                  style={{ background: "white" }}
                />
              }
              Readmore={"Readmore"}
              handleRead={read1}
            />
            <ReadMoreList
              date={"By Law And Lawyears, June 3, 2019"}
              head={"What is Conveyancing? "}
              // headparagraph={"mean home moves has to"}
              content1={
                "Law and Lawyers Ltd, Conveyancing Solicitors in East London 03 June "
              }
              content2={
                "2019 Conveyancing Explained Conveyancing is the legal transfer of.."
              }
              divider={
                <Divider
                  className="md:w-[80%] sm:w-[85%]"
                  style={{ background: "white" }}
                />
              }
              handleRead={read2}
              Readmore={"Readmore"}
            />
            <ReadMoreList
              date={"By Law And Lawyears, June 6, 2016"}
              head={"UK to expand skilled "}
              headparagraph={"occupations list"}
              content1={
                "Law and Lawyers, Immigration Lawyers in East London 04 June 2019 "
              }
              content2={
                "The Migration Advisory Committee (MAC) has published its review of.."
              }
              divider={
                <Divider
                  className="md:w-[80%] sm:w-[85%]"
                  style={{ background: "white" }}
                />
              }
              Readmore={"Readmore"}
              handleRead={read4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNewsComponent;
