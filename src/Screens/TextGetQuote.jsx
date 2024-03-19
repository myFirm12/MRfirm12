import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import Footer from "../Components/Footer/Footer";
import GetAQ from "../Components/Tabs/GetAQ";

function TextGetQuote() {
  return (
    <div
      className="md:w-[100%] md:h-[430vh] md:flex md:flex-col   sm:w-[100%] sm:h-[430vh] sm:flex sm:flex-col"
      //   style={{ background: "red" }}
    >
      <div
        className="md:basis-[2.5%] sm:basis-[2.5%]"
        // style={{ background: "black" }}
      >
        <ScreenNavBar />
      </div>
      {/* Head */}
      <div
        className="md:basis-[9%] sm:basis-[9%] sm:pl-[5%]"
        style={{ background: "rgb(161,144,88)" }}
      >
        <div
          className="md:grid md:place-content-start md:gap-[1.5em] md:pl-[15%] md:pt-[2%]  sm:pt[5%]  sm:grid sm:place-content-center sm:gap-[1.5em] sm:pl-[0%] sm:pt-[8%] "
          style={{
            // display: "grid",
            // placeContent: "start",
            // gap: "1.5em",
            // paddingLeft: "15%",
            color: "white",
          }}
        >
          <h1 className="md:text-[30px] sm:text-[10px]">Get a quote</h1>
          <h1 className="md:text-[30px] sm:text-[10px]">Conveyancing quote </h1>
          <div>
            <p>
              Please complete the form below to get our best conveyancing <br />
              quote for you.
            </p>{" "}
          </div>
        </div>
      </div>
      <div
        className="md:basis-[71%] sm:basis-[71%]"
        style={{ background: "rgb(230, 225, 225)" }}
      >
        <div
          className="md:grid md:place-content-start md:gap-[1.5em] md:pl-[15%] md:pt-[5%]   sm:grid sm:place-content-center sm:gap-[1.5em] sm:pl-[0%] sm:pt-[0%]"
          style={
            {
              // display: "grid",
              // placeContent: "start",
              // gap: "1.5em",
              // paddingLeft: "15%",
              // paddingTop: "5%",
            }
          }
        >
          <GetAQ />
        </div>
      </div>
      <div
        className="md:basis-[17.5%] basis-[17.5%]"
        style={{ background: "black" }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default TextGetQuote;
