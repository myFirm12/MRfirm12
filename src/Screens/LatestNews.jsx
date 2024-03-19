import React from "react";
import Footer from "../Components/Footer/Footer";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import LatestNewsComponent from "../Components/LatestNews/LatestNewsComponent";

function LatestNews() {
  return (
    <>
      <div className="md:h-[280vh] md:w-[100%] md:flex md:flex-col   sm:h-[330vh] sm:w-[100%] sm:flex sm:flex-col">
        {/*  */}
        <div
          className="md:basis-[5%]  sm:basis-[5%]"
          style={{ background: "black" }}
        >
          <ScreenNavBar />
        </div>
        <div
          className="md:basis-[70%] sm:basis-[70%]"
          style={{ background: "black" }}
        >
          <LatestNewsComponent />
        </div>
        <div
          className="md:basis-[25%]  sm:basis-[25%]"
          style={{ background: "rgb(59, 55, 55)" }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LatestNews;

{
  /* <LatestNewsComponent /> */
}
{
  /* <Footer /> */
}
{
  /* <ScreenNavBar /> */
}
