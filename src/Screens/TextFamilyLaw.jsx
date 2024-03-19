import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import pic1 from "../assets/HeadImages/law.jpg";
import Cards from "../Components/Cards/Cards";
import LawyerDisplayCard from "../Components/Cards/LawyerDisplayCard";
import Image2 from "../assets/HeadImages/fam2.jpg";
import Image1 from "../assets/HeadImages/fam1.jpg";

function TextFamilyLaw() {
  return (
    <>
      <div className="md:h-[520vh] md:w-[100%] md:flex md:flex-col  sm:h-[680vh] sm:w-[100%] sm:flex sm:flex-col">
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
          <div>Family Law</div>
        </div>

        {/* Contents */}
        <div
          className="md:basis-[68%] md:flex md:flex-row  sm:basis-[75%] sm:flex sm:flex-col"
          // style={{ background: "pink" }}
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
                  CLEAR AND FOCUSED
                  <br /> ADVICE FOR EACH <br />
                  INDIVIDUAL CASE.
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
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
                  {" "}
                  Family Law Solicitors East London
                </div>
                <p>
                  Law and Lawyers are specialized and experienced Family Law
                  Solicitors in East London, who can provide <br />
                  expert legal advice on divorce and separation. A relationship
                  breakdown and divorce can be <br /> complicated, we understand
                  the stress and grief you are going through. We provide an
                  affordable and friendly legal service to our clients. We
                  understand and ensure that the confidentiality of every client{" "}
                  <br /> shall be maintained.
                </p>
                <p>
                  We have a highly qualified and experienced team of family
                  lawyers in East London who resolve disputes
                  <br /> regarding the division of the matrimonial assets and
                  maintenance upon divorce, separation or the split
                  <br /> up of a Civil Partnership or Cohabitation.
                </p>
                <p>
                  Please note that our tax advise is strictly limited to Stamp
                  duty Land Tax (England) and Land Transaction
                  <br /> Tax (Wales) on Conveyancing matters. The tax/advise for
                  the above is calculated on basis of the details
                  <br /> provided by you (clients)
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
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
                  {" "}
                  Divorce and Separation Lawyers East London
                </div>
                <p>
                  It is natural to worry about a lot of issues when
                  relationships break down. We understand that this will be
                  <br /> an emotional time which is why we will always try to
                  deal with your situation sensitively.
                </p>
                <p>
                  You may be concerned about arrangements for your children,
                  finances and our experienced team will
                  <br /> be able to combine practical and intelligent advice
                  with decisive action to achieve the best results for <br />{" "}
                  you.
                </p>
                <p>
                  Our divorce lawyers in East London can advise you whether you
                  have ground for divorce. If you are the
                  <br /> respondent to the proceedings we can assist and advise
                  you on the implications. If you are looking for a <br />
                  formal separation without dissolving the marriage, we can
                  assist you with the proceedings of legal
                  <br /> separation.
                </p>
                <div
                  style={{
                    width: "97%",
                    height: "50vh",
                    backgroundImage: `url(${Image2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
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
                  name={"Dr Emily"}
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
          className="md:basis-[13%] sm:basis-[10%]"
          style={{ background: "rgb(59, 55, 55)" }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default TextFamilyLaw;
