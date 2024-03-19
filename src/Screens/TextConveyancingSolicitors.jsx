import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import LawyersCarousel from "../Components/Carousels/LawyersCarousel";
import Cards from "../Components/Cards/Cards";

function TextConveyancingSolicitors() {
  return (
    <div className="md:h-[400vh] md:w-[100%] md:flex md:flex-col  sm:h-[650vh] sm:w-[100%] sm:flex sm:flex-col">
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
          background: "rgb(230, 225, 225)",

          color: "rgb(28, 28, 143)",
        }}
      >
        <div>
          Conveyancing <p> Solicitors</p>
        </div>
      </div>

      {/* Contents */}
      <div
        className="md:basis-[59%] md:flex md:flex-row  sm:basis-[75%] sm:flex sm:flex-col"
        style={{ background: "pink" }}
      >
        {/* Left contents */}
        <div
          className="md:basis-[40%] md:flex md:justify-center md:items-start md:pt-[10%]    sm:basis-[30%] sm:flex sm:justify-center sm:items-start sm:pt-[10%]"
          style={{ background: "rgb(28, 28, 143)" }}
        >
          <div className="md:flex md:flex-col md:gap-[4em]  sm:flex sm:flex-col sm:gap-[2em]">
            <div
              className="md:flex md:flex-col md:gap-[2em]  sm:flex sm:flex-col sm:gap-[2em]"
              style={{
                color: "white",
              }}
            >
              <div
                className="md:text-[25px] sm:text-[18px]"
                style={{ fontWeight: "bolder" }}
              >
                “We are specialist <br /> conveyancing solicitors
                <br /> based in East London and
                <br /> have over 5,000 trusted
                <br /> clients”
              </div>
              <div
                className="md:text-[20px] sm:text-[15px]"
                style={{ fontWeight: "800" }}
              >
                Over a decade of Professional
                <br /> Excellence
              </div>
              <div>
                <ul
                  className="md:flex md:flex-col md:justify-center md:gap-[1em] md:ist-disc     sm:flex sm:flex-col sm:justify-center sm:gap-[1em] sm:ist-disc"
                  style={{
                    color: "rgb(228, 215, 215)",
                  }}
                >
                  <li>
                    Fixed fee for sales and purchases of residential <br />{" "}
                    properties up to the value of £750,000
                  </li>
                  <li>
                    Law and Lawyers are on panel with all the <br /> major
                    mortgage lenders
                  </li>
                  <li>
                    Simple and straightforward advice at every
                    <br /> stage of the process
                  </li>
                  <li>
                    Law Society Conveyancing Quality Scheme
                    <br /> (CQS) accredited Law Firm
                  </li>
                  <li>Personal attention to every client.</li>
                </ul>
              </div>
            </div>
            <div>
              <Link
                to="/howaboutfees"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="fees md:w-[15vw] md:h-[6vh]   sm:w-[50vw] sm:h-[6vh]">
                  Know About Fees
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="md:basis-[60%] md:flex md:flex-col   sm:basis-[70%] sm:flex sm:flex-col"
          style={{ background: " rgb(213, 207, 207)" }}
        >
          {/* up */}
          <div
            className="md:basis-[55%] md:flex md:justify-center  sm:basis-[45%] sm:flex sm:justify-center"
            style={{
              background: " rgb(213, 207, 207)",
            }}
          >
            <div className="md:flex md:flex-col md:gap-[2em] md:pt-[5%] md:pl-[5%]   sm:flex sm:flex-col sm:gap-[2em] sm:pt-[5%] sm:pl-[5%]">
              <h2>
                WE PROVIDE EXCEPTIONAL CONVEYANCING SERVICE <br /> TO PROPERTY
                BUYERS AND SELLERS.
              </h2>
              <p>
                Law and Lawyers Solicitors are a specialised conveyancing
                solicitors based in East London. With our vast <br /> experience
                in conveyancing, we offer a wide range of professional legal
                advice on buying and selling <br /> residential/commercial
                property in England and Wales. We can also help you with
                re-mortgages, transfer of <br />
                equity, plot sales and right to buy purchases.
              </p>
              <p>
                The property law is subject to developments in a short span of
                time. Therefore it is important for the
                <br /> buyers/sellers to have a support of fully experienced and
                up to date team. As we are one of the top
                <br /> conveyancing solicitors in East London, we can provide
                simple and straightforward property transaction with
                <br /> regular updates to our clients at every stage of the
                process.
              </p>
              <p>
                We are committed to deliver outstanding service to the clients’
                expectations. As one of the most
                <br /> recommended conveyancing solicitor in East London, we are
                confident that you will find our service truly <br />
                remarkable and satisfactory. We guarantee a smooth and stress
                free property transaction through unique
                <br /> and practical solutions based on our clients’ needs.
              </p>
              <p>
                We undertake all types of property transactions including
                Residential and Commercial Conveyancing. To
                <br /> keep the cost simple and transparent we offer a fixed fee
                for sales and purchases of residential properties
                <br /> up to the value of £750,000. Call us on{" "}
                <span> 020 8586 5657</span> for a no obligation quote or{" "}
                <span>
                  Click here to check our <br /> fixed prices of conveyancing.
                </span>
              </p>
              <p>
                Please note that our tax advise is strictly limited to Stamp
                duty Land Tax (England) and Land Transaction Tax <br /> (Wales)
                on Conveyancing matters. The tax/advise for the above is
                calculated on basis of the details provided
                <br /> by you (clients)
              </p>
            </div>
          </div>
          {/* ==================== */}
          {/* Down */}
          <div
            className="md:basis-[45%] md:relative md:ml-[2.7vw] md:flex md:flex-col   sm:basis-[55%] sm:relative sm:ml-[0vw] sm:flex sm:flex-col"
            style={
              {
                // flex: ".45",
                // position: "relative",
                // marginLeft: "2.7vw",
                // flexDirection: "column",
                // display: "flex",
              }
            }
          >
            <div
              className="md:basis-[10%] md:text-[20px]   sm:basis-[10%] sm:text-[20px]"
              style={{
                //   fontSize: "20px",
                fontWeight: "bolder",
                //   flex: ".1",
              }}
            >
              Our Experts
            </div>
            <div className="md:basis-[90%]  sm:basis-[910%]">
              <LawyersCarousel />
            </div>
          </div>
          {/* ========================= */}
        </div>
      </div>

      {/* Cards */}
      <div
        className="md:basis-[10%] md:grid md:place-content-center md:gap-[.1em]  sm:basis-[8%] sm:flex   sm:gap-[.1em]"
        style={{
          background: "rgb(230, 225, 225)",
        }}
      >
        <Cards />
      </div>

      {/* Footer */}
      <div
        className="md:basis-[19%] sm:basis-[10%]"
        style={{ background: "rgb(59, 55, 55)" }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default TextConveyancingSolicitors;
