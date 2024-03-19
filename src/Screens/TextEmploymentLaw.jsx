import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import pic1 from "../assets/JudgesOnly/p3.jpeg";
import Cards from "../Components/Cards/Cards";
import Image1 from "../assets/HeadImages/shutterstock_334043390-1.jpg";
import LawyerDisplayCard from "../Components/Cards/LawyerDisplayCard";

function TextEmploymentLaw() {
  return (
    <>
      <div className="md:h-[400vh] md:w-[100%] md:flex md:flex-col  sm:h-[590vh] sm:w-[100%] sm:flex sm:flex-col">
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
            Employment <br /> Law
          </div>
        </div>

        {/* Contents */}
        <div
          className="md:basis-[64%] md:flex md:flex-row  sm:basis-[75%] sm:flex sm:flex-col"
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
                  CLEAR AND FOCUSED <br /> ADVICE FOR EACH
                  <br /> INDIVIDUAL CASE.
                </div>
                <div className="md:text-[25px] sm:text-[18px]">
                  Employment Solicitors at Law <br /> and Lawyers are
                  independently <br /> top- ranked Lawyers, who can work <br />
                  with you to find a solution to your <br />
                  problem.
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
                <p>
                  Law and lawyers’ employment law solicitors provide exceptional
                  and affordable legal services in East <br /> London, to
                  employees who are in distress. We are well aware that when a
                  difficult situation arises with <br /> your employers, you are
                  likely to be distraught and require urgent advice. This may be
                  against a <br />
                  background of bullying and harassment, redundancy,
                  disciplinary proceedings, performance allegations, <br />{" "}
                  sickness, discrimination, settlement agreements, gross
                  misconduct, constructive dismissal, unfair <br />
                  dismissal, resignation, a contractual dispute or for any other
                  matter.
                </p>
                <div
                  style={{
                    width: "97%",
                    height: "50vh",
                    backgroundImage: `url(${Image1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <p>
                  Our large team of highly experienced and skilled Employment
                  Law Solicitors based in London and
                  <br /> Manchester are experts in every aspect of employment
                  law and are also specialists within individual <br />
                  practice areas. We are dedicated to providing prompt,
                  practical and authoritative legal advice on <br />
                  employment law issues and we can provide immediate legal
                  representation anywhere in the UK.
                </p>
                <p>
                  Please note that our tax advise is strictly limited to Stamp
                  duty Land Tax (England) and Land Transaction
                  <br /> Tax (Wales) on Conveyancing matters. The tax/advise for
                  the above is calculated on basis of the details
                  <br /> provided by you (clients)
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
                  name={"Carolann J. Thorsen"}
                  Image={pic1}
                />
              </div>
            </div>
            {/* ========================= */}
          </div>
        </div>

        {/* Cards */}
        <div
          className="md:basis-[12%] md:grid md:place-content-center md:gap-[.1em]  sm:basis-[8%] sm:flex   sm:gap-[.1em]"
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

export default TextEmploymentLaw;
