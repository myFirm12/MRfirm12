import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import { Link } from "react-router-dom";
import BasicTabs from "../Components/Tabs/BasicTabs";
import Image from "../assets/HeadImages/shutterstock_130099706.jpg";
import Footer from "../Components/Footer/Footer";
import Cards from "../Components/Cards/Cards";
import pic1 from "../assets/JudgesOnly/jag.jpeg";
import pic5 from "../assets/JudgesOnly/law1-2.png";
import LawyerDisplayCard from "../Components/Cards/LawyerDisplayCard";

function TextImmigration() {
  return (
    <div
      className="md:w-[100%] md:h-[520vh] md:flex md:flex-col  sm:w-[100%] sm:h-[630vh] sm:flex sm:flex-col"
      // style={{ background: "red" }}
    >
      {/* Head */}
      <div
        className="md:basis-[2%] sm:basis-[2%]"
        // style={{ background: "black" }}
      >
        <ScreenNavBar />
      </div>

      {/* Immigration */}
      <div
        className="md:basis-[6%] md:flex md:justify-start md:items-center md:pl-[12%] md:text-[40px] md:text-bolder md:text-bold    sm:basis-[26%] sm:flex sm:justify-start sm:items-center sm:pl-[0%] sm:text-bold sm:text-[20px] sm:text-bolder sm:text-[40px] sm:pl-[12%]"
        style={{ background: "rgb(230, 225, 225)", color: "rgb(28, 28, 143)" }}
      >
        <div>Immigration</div>
      </div>
      <div
        className="md:basis-[67%] md:flex md:flex-row   sm:basis-[47%] sm:flex sm:flex-col"
        style={{ background: "black" }}
      >
        {/* Left Content */}
        <div
          className="md:basis-[40%] md:pt-[10%] md:flex md:justify-center md:items-start    sm:basis-[60%] sm:pt-[0%] sm:flex sm:justify-center sm:items-start"
          style={{ background: "rgb(28, 28, 143)" }}
        >
          {/* ==================================== */}
          <div className="md:gap-[4em] md:flex md:flex-col   sm:gap-[4em] sm:flex sm:flex-col">
            <div
              className="md:gap-[2em] md:flex md:flex-col sm:flex-shrink-0 sm:gap-[.5em] sm:flex sm:flex-col"
              style={{
                color: "white",
              }}
            >
              <div
                className="md:text-[25px] sm:text-[18px]"
                style={{ fontWeight: "bolder" }}
              >
                OUR EXPERIENCED <br /> IMMIGRATION LAWYERS
                <br /> PROVIDE PROFESSIONAL
                <br />
                IMMIGRATION ADVICE.
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
          {/* ===================================== */}
        </div>
        {/* Right Content */}
        <div
          className="md:basis-[60%] md:flex md:flex-col   sm:basis-[40%] sm:flex sm:flex-col"
          style={{ background: "rgb(213, 207, 207)" }}
        >
          <div className="md:basis-[2%] sm:basis-[0%]"></div>
          <div
            className="md:basis-[75%] md:flex  sm:basis-[77%] sm:flex"
            style={{ background: "rgb(213, 207, 207)" }}
          >
            <div className=" md:flex md:flex-col md:pl-[5%] md:gap-[6em]    sm:flex sm:flex-col sm:p-[5%] sm:gap-[4em]">
              <div className="md:flex md:flex-col md:gap-[1em]  sm:flex sm:flex-col sm:gap-[1em]">
                <div>
                  Law and Lawyers are a Law Society’s LEXCEL accredited law
                  firm, who have been an advisor to
                  <br /> businesses and individuals on Immigration law for over
                  10 years. We provide legal advice on all aspects of
                  <br /> immigration and nationality law. We can offer you the
                  best immigration Lawyers East London has to offer.
                  <br /> We are experienced and specialized immigration and
                  nationality law solicitors. We offer a variety of <br />
                  services from immigration advice to visa applications and
                  appeals.
                </div>
                <div
                  className="md:w-[97%] md:h-[50vh]   sm:w-[100%] sm:h-[20vh]"
                  style={{
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="md:flex md:flex-col md:gap-[1em]  sm:flex sm:flex-col sm:gap-[1em]">
                <h2>
                  “Law and Lawyers are a Result Driven Immigration <br />{" "}
                  Solicitors in East London”
                </h2>

                <p>
                  Law and Lawyers have experienced and specialist legal advisors{" "}
                  <br />
                  who will provide you with the right advice in matters relating
                  to immigration. We provide legal representation to you
                  throughout your application <br />
                  process. We also provide immigration advice on appeals and
                  representation before the Immigration
                  <br /> Tribunal and application under Europe Conventions and
                  Human Rights. For consultation with our
                  <br /> Immigration experts, you can contact us here.
                </p>
                <p>
                  The property law is subject to developments in a short Please
                  note that our tax advise is strictly limited to Stamp duty
                  Land Tax (England) and Land Transaction
                  <br /> Tax (Wales) on Conveyancing matters. The tax/advise for
                  the above is calculated on basis of the details
                  <br /> provided by you (clients)
                </p>
              </div>
              <div className="md:flex md:flex-col md:gap-[1em]     sm:flex sm:flex-col sm:gap-[1em]">
                <div
                  className="md:text-[30px]  sm:text-[15px]"
                  style={{ fontWeight: "bold" }}
                >
                  Immigration services we offer
                </div>
                <div
                  className="md:text-[20px] sm:text-[15px]"
                  style={{ fontWeight: "bold" }}
                >
                  For Individuals
                </div>
                <div className="md:block  sm:hidden">
                  <BasicTabs />
                </div>
              </div>
            </div>
          </div>

          {/* Our Experts */}
          <div
            className="md:basis-[23%] md:flex md:flex-col   sm:basis-[23%] sm:flex sm:flex-col"
            // style={{ background: "blue" }}
          >
            <div
              className="md:basis-[10%] sm:basis-[10%]"
              style={{ background: "rgb(213, 207, 207)" }}
            >
              <div
                className="md:pl-[7%] md:text-[25px]   sm:pl-[0%] sm:text-[25px]"
                style={{
                  fontWeight: "bolder",
                }}
              >
                Our Experts
              </div>
            </div>
            <div
              className="md:basis-[90%] md:flex md:flex-row md:pl-[7%]    sm:basis-[90%] sm:flex sm:flex-col sm:pl-[0%]"
              //   style={{ background: "rgb(230, 225, 225)" }}
            >
              <div className="md:basis-[50%]  md:flex md:justify-end   sm:basis-[50%] sm:flex sm:justify-end">
                <LawyerDisplayCard
                  location={"London"}
                  email={"emock@gmail.com/street"}
                  phoneNumber={"+233-000-0000"}
                  name={"Rita C. Stebbins"}
                  Image={pic1}
                />
              </div>
              <div className="md:basis-[50%] md:flex md:justify-start md:pl-[.5%]   sm:basis-[50%] sm:flex sm:justify-start sm:pl-[.5%]">
                <LawyerDisplayCard
                  location={"London"}
                  email={"emock@gmail.com/street"}
                  phoneNumber={"+233-000-0000"}
                  name={"Paul V. Rodriguez"}
                  Image={pic5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:basis-[10%] md:grid md:place-content-center md:gap-[.1em]  sm:basis-[8%] sm:flex   sm:gap-[.1em]"
        style={{
          background: "rgb(230, 225, 225)",
        }}
      >
        <Cards />
      </div>
      <div
        className="md:basis-[15%] sm:basis-[15%]"
        style={{ background: "rgb(59, 55, 55)" }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default TextImmigration;
