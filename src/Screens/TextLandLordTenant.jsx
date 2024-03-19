import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import pic1 from "../assets/JudgesOnly/pi1.jpeg";
import Cards from "../Components/Cards/Cards";
import LawyerDisplayCard from "../Components/Cards/LawyerDisplayCard";
import Image from "../assets/HeadImages/lord.jpg";
import Image2 from "../assets/HeadImages/fam2.jpg";
import Image1 from "../assets/HeadImages/fam1.jpg";

function TextLandLordTenant() {
  return (
    <>
      <div className="md:h-[400vh] md:w-[100%] md:flex md:flex-col  sm:h-[680vh] sm:w-[100%] sm:flex sm:flex-col">
        {/* Head */}
        <div
          className="md:basis-[2%]  sm:basis-[1.7%]"
          // style={{ background: "black" }}
        >
          <ScreenNavBar />
        </div>

        {/* Convey */}
        <div
          className="md:basis-[9%] md:text-[40px] md:pl-[12%] md:items-center md:justify-start md:flex md:text-bold        sm:basis-[5.3%] sm:text-[40px] sm:pl-[12%] sm:items-center sm:justify-start sm:flex sm:text-bold"
          style={{
            background: "rgb(230, 225, 225)",

            color: "rgb(28, 28, 143)",
          }}
        >
          <div>
            Landlord and <br />
            Tenant{" "}
          </div>
        </div>

        {/* Contents */}
        <div
          className="md:basis-[61%] md:flex md:flex-row  sm:basis-[75%] sm:flex sm:flex-col"
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
                  We have extensive <br />
                  knowledge and expertise in <br />
                  dealing with landlord and <br />
                  tenant issues.
                </div>
              </div>
              {/* <div>
                <Link
                  to="/howaboutfees"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button className="fees md:w-[15vw] md:h-[6vh]   sm:w-[50vw] sm:h-[6vh]">
                    Know About Fees
                  </button>
                </Link>
              </div> */}
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
              {/* ========================================== */}

              <div className="md:flex md:flex-col md:gap-[2em] md:pt-[5%] md:pl-[5%]   sm:flex sm:flex-col sm:gap-[2em] sm:pt-[5%] sm:pl-[5%]">
                {/* ======== */}
                <p>
                  We have extensive knowledge and expertise in dealing with
                  landlord and tenant issues. We can help you with
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <li>Residential repossessions and evictions</li>
                  <li>Advice on notices and tenancy agreements</li>
                  <li>Commercial property disputes</li>
                </ul>
                <p>
                  Please note that our tax advise is strictly limited to Stamp
                  duty Land Tax (England) and Land Transaction <br /> Tax
                  (Wales) on Conveyancing matters. The tax/advise for the above
                  is calculated on basis of the details <br /> provided by you
                  (clients)
                </p>
                <div
                  style={{
                    width: "100%",
                    height: "50vh",
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
                  How much will it cost?
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5em",
                  }}
                >
                  We offer competitive rates including fixed fees in possession{" "}
                  <br /> proceedings. Where appropriate we may also be help you
                  under a no
                  <br /> win no fee agreement.
                  <p>To contact us and discuss how we can help you,</p>
                  <p>
                    Call us on 020 8586 5657 or get in touch via our online
                    enquiry.
                  </p>
                </div>
                {/* =========== */}
              </div>
              {/* ===============-----...... */}
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
                <LawyerDisplayCard
                  location={"London"}
                  email={"emock@gmail.com/street"}
                  phoneNumber={"+233-000-0000"}
                  name={"Leonard Franklin"}
                  Image={pic1}
                />
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
          className="md:basis-[18%] sm:basis-[10%]"
          style={{ background: "rgb(59, 55, 55)" }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default TextLandLordTenant;
