import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import pic1 from "../assets/JudgesOnly/jag.jpeg";
import Cards from "../Components/Cards/Cards";
import Image1 from "../assets/HeadImages/shutterstock_334043390-1.jpg";
import LawyerDisplayCard from "../Components/Cards/LawyerDisplayCard";

function TextWillandProbate() {
  return (
    <>
      <div className="md:h-[500vh] md:w-[100%] md:flex md:flex-col  sm:h-[680vh] sm:w-[100%] sm:flex sm:flex-col">
        {/* Head */}
        <div
          className="md:basis-[2%]  sm:basis-[1.7%]"
          // style={{ background: "black" }}
        >
          <ScreenNavBar />
        </div>

        {/* Convey */}
        <div
          className="md:basis-[7%] md:text-[40px] md:pl-[12%] md:items-center md:justify-start md:flex md:text-bold        sm:basis-[5.3%] sm:text-[40px] sm:pl-[12%] sm:items-center sm:justify-start sm:flex sm:text-bold"
          style={{
            background: "rgb(230, 225, 225)",

            color: "rgb(28, 28, 143)",
          }}
        >
          <div>
            Wills and <br /> Probate
            <br />
            Solicitors
          </div>
        </div>

        {/* Contents */}
        <div
          className="md:basis-[66%] md:flex md:flex-row  sm:basis-[75%] sm:flex sm:flex-col"
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
                  Our experienced and <br /> proactive team provide
                  <br /> comprehensive solution
                  <br /> to the legal issues. Our <br />
                  advice is personalized to
                  <br /> meet the need of all our <br />
                  individual clients.
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
              {/* ========================================== */}

              <div className="md:flex md:flex-col md:gap-[2em] md:pt-[5%] md:pl-[5%]   sm:flex sm:flex-col sm:gap-[2em] sm:pt-[5%] sm:pl-[5%]">
                <div
                  style={{
                    width: "97%",
                    height: "50vh",
                    backgroundImage: `url(${Image1})`,
                    // background: "yellow",
                    backgroundSize: "cover",
                  }}
                ></div>

                <p>
                  Our experienced and proactive team provide comprehensive
                  solution to the legal issues. Our advice is <br />{" "}
                  personalized to meet the need of all our individual clients.
                  We believe our clients find our approach both <br /> practical
                  and understanding. We make sure that any course of action is
                  both reasonable and pragmatic for <br /> our clients.As the
                  economic background becomes more intricate, a trustworthy and
                  professional advice is <br />
                  required to protect and preserve wealth.
                </p>
                <p>We are here to support you;</p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <li>If you need help making a will?</li>
                  <li>
                    If you need legal assistance to plan for the future or to
                    deal with assets of a relative <br /> who just passes away?
                  </li>
                  <li>
                    If you wish to contest a will or inheritance decision?
                  </li>
                </ul>
                <p>
                  We provide an expert advice and guidance on all the aspects of
                  inheritance law. Our qualified and <br /> experienced
                  solicitors give a friendly and professional service at
                  reasonable cost.
                </p>
                <p>
                  Oaths and Affidavits are legal documents that are required for
                  court proceedings or as a part of probate and <br /> other
                  civil proceedings. We act as Commissioners for Oaths and the
                  legal witness for swearing of an Oath.
                </p>
                <p>
                  Please note that our tax advise is strictly limited to Stamp
                  duty Land Tax <br /> (England) and Land Transaction Tax
                  (Wales) on Conveyancing matters. The tax/advise for the above
                  is calculated on basis of the details <br /> provided by you
                  (clients)
                </p>
                <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                  Administration of estate
                </div>
                <p>
                  If the person has made a Will, then it will set out how the
                  estate is to be dealt with after his/her death. But in <br />{" "}
                  the absence of a Will, the estate passes under the Rules of
                  Intestacy. In the absence of a Will, family may <br /> need
                  assistance to understand and decide who inherits from the
                  estate.
                </p>
                <p>
                  Our advice and assistance may involve applying for letters of
                  administration, or a grant of probate, transfers
                  <br /> of property, calling in of insurance policies,
                  liquidation of assets, tracing of beneficiaries and
                  negotiation with
                  <br /> the HM Revenue & Customs.
                </p>
                <p>
                  The paperwork and the process can be hectic and extremely time
                  consuming. We are there to help and can <br /> assist you
                  throughout all or part of the process.
                </p>
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
                  name={"Rita C. Stebbins"}
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
          className="md:basis-[15%] sm:basis-[10%]"
          style={{ background: "rgb(59, 55, 55)" }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default TextWillandProbate;
