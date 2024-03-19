import React from "react";
import ScreenNavBar from "../Components/ScreenNavBar/ScreenNavBar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import pic1 from "../assets/HeadImages/law.jpg";
import Cards from "../Components/Cards/Cards";
import LawyerDisplayCard from "../Components/Cards/LawyerDisplayCard";
import Image from "../assets/HeadImages/lord.jpg";

function TextHowAboutFees() {
  return (
    <div>
      <div className="md:h-[2100vh] md:w-[100%] md:flex md:flex-col  sm:h-[2490vh] sm:w-[100%] sm:flex sm:flex-col">
        {/* Head */}
        <div
          className="md:basis-[2%]  sm:basis-[1.7%]"
          style={{ background: "black" }}
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
            Conveyancing <br /> Fees{" "}
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
                  We will always be pleased to <br /> give you a quotation which
                  <br /> will be tailored to your
                  <br /> specific requirements. Law <br />
                  and Lawyers offer a number <br />
                  of discounts, which you may
                  <br /> be entitled to, please
                  <br /> enquire at your local office.
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="md:basis-[60%] md:flex md:flex-col   sm:basis-[70%] sm:flex sm:flex-col"
            style={{ background: " rgb(213, 207, 207)" }}
          >
            {/* up */}
            <div className="md:basis-[100%] md:flex md:p-[5%]">
              <div className="md:flex md:flex-col md:gap-[1em] md:pl-[5%]">
                {/* ============================== */}
                {/* <div style={{ flex: ".3", background: "green" }}> */}
                <div
                  className="md:flex md:flex-col md:gap-[1em]"
                  style={{
                    // display: "flex",
                    // flexDirection: "column",
                    // gap: "1.5em",
                    fontSize: "17px",
                  }}
                >
                  <div>
                    Our prices cover all of the legal work and other
                    administrative tasks required to complete your sale <br />{" "}
                    and/or purchase, including dealing with registration at the
                    Land Registry and dealing with the payment
                    <br /> of Stamp Duty Land Tax (Stamp Duty) if the property
                    is in England, or Land Transaction Tax (Land Tax) if <br />
                    the property you wish to buy is in Wales.
                  </div>
                  <div>
                    We work on fixed fee basis and our fees typically range from
                    £745 to £1,750 depending upon a number
                    <br /> of factors including the complexity of the
                    transaction and the location of the property.
                  </div>
                  <div>
                    We will always be pleased to give you a quotation which will
                    be tailored to your specific requirements.
                    <br /> Law and Lawyers offer a number of discounts, which
                    you may be entitled to, please enquire at your <br /> local
                    office.
                  </div>
                  <div>
                    We are not a “factory conveyancing firm” and if we are
                    instructed, your transaction will be passed to
                    <br /> one of our qualified solicitors, who has the relevant
                    expertise to lead you through the process from start <br />
                    to finish and once of our directors will be supervising your
                    matter.
                  </div>
                  <div>
                    We have over 10 years of experience in Conveyancing. You can
                    be assured of high
                    <br /> standard of quality at Law and Lawyers as we have
                    been awarded the Law Society’s
                    <br /> LEXCEL Accredited Quality mark for high standards of
                    client care and practice
                    <br /> management. Law and Lawyers are also CQS accredited.
                    To gain this accreditation Law
                    <br /> and Lawyers underwent rigorous assessment by the Law
                    Society, which marks the firm <br />
                    out as meeting high standards in the residential
                    conveyancing process.
                  </div>
                  <div
                    className="md:flex md:flex-col md:gap-[.5em]"
                    style={
                      {
                        //   display: "flex",
                        //   flexDirection: "column",
                        //   gap: ".5em",
                      }
                    }
                  >
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Sale or Purchase – Freehold Properties
                    </div>
                    <ul>
                      <li>
                        Property Value £0-£500,000: From £845 to £1495 plus VAT
                        at 20%
                      </li>
                      <li>
                        Property Value £500,001 and over: from £995 to £2495
                        plus VAT at 20% (but you <br /> should contact us for a
                        bespoke quotation.)
                      </li>
                    </ul>
                  </div>
                  <div
                    className="md:flex md:flex-col md:gap-[.5em]"
                    style={
                      {
                        //   display: "flex",
                        //   flexDirection: "column",
                        //   gap: ".5em",
                      }
                    }
                  >
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Sale or Purchase – Leasehold Properties
                    </div>
                    <ul>
                      <li>
                        Property Value £0 – £500,000: From £895 to £1695 plus
                        VAT at 20%
                      </li>
                      <li>
                        Property Value £500,001 and over: from £1095 to £2695
                        plus VAT at 20% (but <br /> you should contact us for a
                        bespoke quotation.)
                      </li>
                    </ul>
                  </div>
                  <div
                    className="md:flex md:flex-col md:gap-[.5em]"
                    style={
                      {
                        //   display: "flex",
                        //   flexDirection: "column",
                        //   gap: ".5em",
                      }
                    }
                  >
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Remortgage
                    </div>
                    <ul>
                      <li>
                        Property Value £0-£500,000: From £595 to £895 plus VAT
                        at 20%
                      </li>
                      <li>
                        Property Value £500,001 and over: from £795 to £1495
                        plus VAT at 20% (but you <br /> should contact us for a
                        bespoke quotation.)
                      </li>
                    </ul>
                  </div>
                  <div
                    className="md:flex md:flex-col md:gap-[.5em]"
                    style={
                      {
                        //   display: "flex",
                        //   flexDirection: "column",
                        //   gap: ".5em",
                      }
                    }
                  >
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Disbursements/Additional Items
                    </div>
                    <div>
                      Disbursements are costs related to your matter that are
                      payable to third parties, such as Land Registry
                      <br /> fees or HMRC. We handle the payment of the
                      disbursements on your behalf to ensure a smoother <br />
                      process.
                    </div>
                    <ul>
                      <li>
                        Electronic Identification (per person): from £7.20
                      </li>
                      <li>Search Pack for a Purchase: from £255.80</li>
                      <li>Electronic Funds Transfer fee (per transfer): £20</li>
                      <li>Land Registry fees: from £20 – £910</li>
                      <li>Bankruptcy Search (per person): £2</li>
                      <li>Land registry search: £3</li>
                      <li>
                        Official Copy Documents for a Sale: £6-£24 on average
                      </li>
                      <li>
                        Land Registry Fee: Please visit the Land Registry
                        website
                      </li>
                      <li>
                        Stamp Duty Land Tax – This will depend upon the purchase
                        price of the property <br /> and whether you have an
                        interest in any other land in the world. You can <br />
                        calculate your stamp duty liability by visiting HMRC’s
                        website or if the property is <br />
                        located in Wales by using the Welsh Revenue Authority’s
                        website.
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".5em",
                    }}
                  >
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Third Party Costs – Leasehold Properties
                    </div>
                    <ul>
                      <li>
                        Notice of Transfer fee – This fee if chargeable is set
                        out in <br /> the lease. Often the fee is between £25-
                        £200 per notice.*
                      </li>
                      <li>
                        Notice of Charge fee (if the property is to be
                        mortgaged) – This fee is set out in <br /> the lease.
                        Often the fee is between £25- £200 per notice.*
                      </li>
                      <li>
                        Deed of Covenant fee – This fee is provided by the
                        management company for <br /> the property and can be
                        difficult to estimate. Often it is between £25- £200*
                      </li>
                      <li>
                        Certificate of Compliance fee – To be confirmed upon
                        receipt of the lease, as <br /> can range between £25-
                        £200*
                      </li>
                      <li>
                        Sales packs from a management company (if you are
                        selling) can range from <br /> £100 – £450.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="md:flex md:flex-col md:gap-[.5em]"
                    style={
                      {
                        //   display: "flex",
                        //   flexDirection: "column",
                        //   gap: ".5em",
                      }
                    }
                  >
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Additional Fees
                    </div>
                    <ul>
                      <li>Acting for Lender – £145 to £495+ VAT at 20%</li>
                      <li>Acting for Leasehold – £100 t0 £395 + VAT at 20%</li>
                      <li>Acting for Newbuild – £100 to £250 + VAT at 20%</li>
                      <li>
                        Acting for Shared Ownership – £100 to £195 + VAT at 20%
                      </li>
                      <li>Right to Buy – £100 to £195 + VAT at 20%</li>
                      <li>Auction Property – £100 to £195 + VAT at 20%</li>
                      <li>
                        Limited Company Purchase – £50 to 195 + VAT at 20%
                      </li>
                      <li>Help to Buy/Lifetime ISA – £75 + VAT at 20%</li>
                      <li>Help to Buy Scheme – £100 to £150 + VAT at 20%</li>
                      <li>Gifted Deposit – £75 to £150 + VAT at 20%</li>
                    </ul>
                    <small>
                      *These prices vary from property to property and can on
                      occasion be significantly more than the ranges <br />{" "}
                      given above. More often than not, these costs are
                      compulsory as your lender will require compliance. <br />{" "}
                      We will account to you when the information is supplied to
                      us. You should also be aware that ground <br /> rent and
                      service charges are likely to apply throughout your
                      ownership of the property and will most <br /> likely
                      increase during your period of ownership. We will confirm
                      the ground rent and the anticipated <br /> service charge
                      as soon as this we receive this information.
                    </small>
                  </div>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: ".5em",
                    }
                  }
                >
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Stamp Duty Land Tax
                    </div>
                  </div>
                  <div>
                    This depends on the purchase price of your property. You can
                    calculate the amount you will need to pay <br /> by using
                    HMRC’s website or if the property is located in Wales by
                    using the Welsh Revenue Authority’s
                    <br /> website.
                  </div>
                </div>

                <div
                  className="md:flex md:flex-col md:gap-[.5em]"

                  //   style={{
                  //     display: "flex",
                  //     flexDirection: "column",
                  //     gap: ".5em",
                  //   }}
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Freehold Sale
                  </div>
                  <div>In what circumstances could the costs change?</div>
                  <div>
                    We want to ensure you only pay for the service you receive,
                    so, as an example, a simple house sale with
                    <br /> one standard mortgage to redeem will cost less than a
                    complex legal title involving more than one <br />
                    lender or a management company that we need to engage with.
                  </div>
                  <div>
                    Some factors which could typically increase the cost of the
                    service you require are:
                  </div>
                  <ul>
                    <li>if the legal title is defective;</li>
                    <li>if the title is unregistered;</li>
                    <li>
                      if there is a management company that we need to engage
                      with to obtain a <br /> deed of covenant or a consent to
                      the sale;
                    </li>
                    <li>
                      if we need to comply with a restriction on the title;
                    </li>
                    <li>
                      if we discover that the correct consents have not been
                      obtained for alteration <br /> works;
                    </li>
                    <li>
                      if you have more than one mortgage secured against the
                      property;
                    </li>
                    <li>
                      if you are selling through an auction or have tight
                      deadlines to meet;
                    </li>
                    <li>
                      if documents or information are requested from you or any
                      other party, which <br /> requires our work to be
                      duplicated.
                    </li>
                  </ul>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: ".5em",
                    }
                  }
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    What we will do for you
                  </div>
                  <small>
                    We will let you have a breakdown of what our fees include,
                    when we provide you with a quote. It may <br /> include some
                    or all of the following matters:
                  </small>
                  <ul>
                    <li>
                      obtaining a redemption figure from your lender and
                      checking with you that the <br /> figure is correct;
                    </li>
                    <li>
                      obtaining office copy entries and any supporting documents
                      from HM Land <br /> Registry which will enable us to
                      prepare the contract to prove that you have the <br />{" "}
                      right to sell the property;
                    </li>
                    <li>
                      preparing a bundle of contract documents to be sent to the
                      buyer’s solicitor;
                    </li>
                    <li>
                      answering any enquiries raised by the buyer’s solicitor
                      and agreeing any <br /> amendments to the contract;
                    </li>
                    <li>approving the transfer deed;</li>
                    <li>exchanging contracts;</li>
                    <li>preparing a completion statement for your approval;</li>
                    <li>
                      on completion, receiving the sale proceeds from the
                      buyer’s solicitors, repaying <br /> your mortgage, paying
                      the estate agents and our fees and then accounting to{" "}
                      <br /> you for the net sale proceeds.
                    </li>
                  </ul>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"

                  //   style={{
                  //     display: "flex",
                  //     flexDirection: "column",
                  //     gap: ".5em",
                  //   }}
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Are there any exclusions?
                  </div>
                  <small>
                    It is important to note that the information above relates
                    to residential conveyancing for individuals who <br /> are
                    selling their own property. If any of the circumstances
                    below apply, it is likely to involve additional <br /> work,
                    or you may require advice from another department within the
                    practice:
                  </small>
                  <ul>
                    <li>if you are selling a tenanted property;</li>
                    <li>
                      if you are acting in your capacity as director of a
                      company and/or require the <br /> discharge of any company
                      mortgages at Companies House;
                    </li>
                    <li>
                      if the property you are selling is to be transferred out
                      of an existing title and <br />
                      documents need to be drafted or negotiated;
                    </li>
                    <li>
                      if you are selling the property as an executor or acting
                      as an attorney under a <br /> lasting power of attorney.
                    </li>
                  </ul>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: ".5em",
                    }
                  }
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Overview of the conveyancing process
                  </div>
                  <small>
                    As members of the Law Society’s Conveyancing Quality Scheme
                    we follow the Law Society <br />
                    Conveyancing Protocol which is designed to make the
                    conveyancing process as straightforward and <br /> efficient
                    as possible.
                  </small>
                  <small>
                    The steps involved in the sale of your property will include
                    the following:
                  </small>
                  <ul>
                    <li>
                      If the title to your property is unregistered, we will ask
                      you to supply your title <br /> deeds. It is likely
                      however that your property will be registered, and if it
                      is, we can <br />
                      obtain title documents from HM Land Registry
                      electronically.
                    </li>
                    <li>
                      Once you have instructed us to proceed, we will send to
                      you a short
                      <br /> questionnaire and the relevant protocol forms
                      (property information form, and a<br /> fittings and
                      contents form) for completion.
                    </li>
                    <li>
                      Once we have received your completed paperwork, along with
                      the memorandum of sale from the
                      <br /> selling agents (or details of the buyer’s
                      solicitors <br />
                      from you if it is a private sale), we will prepare the
                      contract pack for the buyer’s
                      <br /> solicitors.
                    </li>
                    <li>
                      As soon as your buyer is in a position to proceed (that is
                      once they have
                      <br /> concluded their financial arrangements and
                      completed survey and enquiries,
                      <br /> and all relevant searches), we shall discuss with
                      you and agree with your buyer’s
                      <br /> solicitor a suitable completion date for your sale.
                      If you have a related purchase,
                      <br /> we will also need to agree this date with your
                      seller’s solicitor.
                    </li>
                    <li>
                      Once contracts have been exchanged there is a legally
                      binding agreement
                      <br /> between you and your buyer for the sale and
                      purchase of your property and you
                      <br /> have to complete on the date agreed in the
                      contract.
                    </li>
                    <li>exchanging contracts;</li>
                    <li>
                      On the completion date we will notify you once the sale
                      proceeds are received
                      <br /> and advise your estate agent if the sale was
                      negotiated by them and pay their
                      <br /> account. We will also pay off any mortgage which
                      you have secured on your
                      <br /> property, and either return the net proceeds to you
                      or apply those funds to your <br />
                      related purchase.
                    </li>
                  </ul>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: ".5em",
                    }
                  }
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Leasehold sale
                  </div>
                  <div>In what circumstances could the costs change?</div>
                  <div>
                    We want to ensure you only pay for the service you receive,
                    so, as an example, a simple flat sale with one <br />{" "}
                    standard mortgage to redeem will cost less than selling a
                    property with a complex leasehold title,
                    <br /> involving more than one lender and a management
                    company that we need to engage with. It is also
                    <br /> important to appreciate that on the sale of a
                    leasehold property, we will be required to obtain a <br />
                    Leasehold Information Pack, the cost of which differs
                    considerably between different managing agents.
                    <br /> Should you pay your ground rent and service charge to
                    different companies, then there will be two
                    <br /> Leasehold Information Packs to acquire and this means
                    that there will be two differing charges. It is
                    <br /> important that you budget accordingly and be aware
                    that there are costs that we do not know but will
                    <br /> be payable.
                  </div>
                  <div>
                    Some factors which could typically increase the cost of the
                    service you require are:
                  </div>
                  <ul>
                    <li>
                      if the legal title is defective, the lease needs to be
                      extended or a deed of <br />
                      variation is required;
                    </li>
                    <li>
                      if this is the assignment of an existing lease and is not
                      the grant of a new lease;
                      <br /> if the title is unregistered;
                    </li>
                    <li>if there is an intermediary leasehold title;</li>
                    <li>
                      if there is a management company that we need to engage
                      with to obtain a pre-
                      <br /> sale pack or to obtain a consent to the sale;
                    </li>
                    <li>
                      if there is a freeholder with whom we need to engage in
                      order to obtain a pre
                      <br /> -sale pack or obtain consent to the sale;
                    </li>
                    <li>
                      if we discover that the correct consents have not been
                      obtained for alteration <br /> works;
                    </li>
                    <li>
                      if you have more than one mortgage secured against the
                      property;
                    </li>
                    <li>
                      if you are selling through an auction or have tight
                      deadlines to meet;
                    </li>
                    <li>
                      if documents or information are requested from you or any
                      other party, which <br /> requires our work to be
                      duplicated.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    What we will do for you
                  </div>
                  <small>
                    We will let you have a breakdown of our fees. It may include
                    some or all of the following matters:
                  </small>
                  <ul>
                    <li>
                      obtaining a redemption figure from your lender and
                      checking with you that the <br /> figure is correct;
                    </li>
                    <li>
                      obtaining office copy entries and any supporting documents
                      from HM Land <br /> Registry which will enable us to
                      prepare the contract to prove that you have the <br />{" "}
                      right to sell the property;
                    </li>
                    <li>
                      requesting and reviewing the information supplied by the
                      freeholder and/or <br /> managing agent (the pre-sale
                      pack/Leasehold Information Pack);
                    </li>
                    <li>
                      preparing a bundle of contract documents to be sent to the
                      buyer’s solicitor;
                    </li>
                    <li>
                      answering any enquiries raised by the buyer’s solicitor
                      and agreeing any <br /> amendments to the contract;
                    </li>
                    <li>approving the transfer deed;</li>
                    <li>exchanging contracts;</li>
                    <li>
                      preparing a completion statement for your approval,
                      including the calculation of <br /> any apportionments of
                      ground rent and service charges;
                    </li>
                    <li>
                      on completion, receiving the sale proceeds from the
                      buyer’s solicitors, repaying <br /> your mortgage, paying
                      the estate agents and our fees and then accounting to{" "}
                      <br /> you for the net sale proceeds.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    In what circumstances will the above matters not apply to
                    me?
                  </div>
                  <small>
                    It is important to note that the information above relates
                    to residential conveyancing for individuals who <br /> are
                    selling their own property. If any of the circumstances
                    below apply, it is likely to involve additional <br /> work
                    or you may require advice from another department within the
                    practice:
                  </small>
                  <ul>
                    <li>if you are selling a tenanted property;</li>
                    <li>
                      if you are acting in your capacity as director of a
                      company and/or require the <br />
                      discharge of any company mortgages at Companies House;
                    </li>
                    <li>
                      if the property you are selling is to be transferred out
                      of an existing title and <br />
                      documents need to be drafted or negotiated;
                    </li>
                    <li>
                      if you are selling the property as an executor or acting
                      as an attorney under a <br />
                      lasting power of attorney.
                    </li>
                  </ul>
                  <div>Overview of the conveyancing process</div>
                  <small>
                    As members of the Law Society’s Conveyancing Quality Scheme
                    we follow the Law Society <br /> Conveyancing Protocol which
                    is designed to make the conveyancing process as
                    straightforward and <br /> efficient as possible.
                  </small>
                  <small>
                    The steps involved in the sale of your property will include
                    the following:
                  </small>
                  <ul>
                    <li>
                      If the title to your property is unregistered, we will ask
                      you to supply your title <br /> deeds. It is likely
                      however that your property will be registered, and if it
                      is, we can <br /> obtain title documents from HM Land
                      Registry electronically.
                    </li>
                    <li>
                      Once you have instructed us to proceed, we will send to
                      you a short <br /> questionnaire and the relevant protocol
                      forms (property information form, <br /> fittings and
                      contents form and a leasehold information form) for
                      completion.
                    </li>
                    <li>
                      Once we have received your completed paperwork, along with
                      the <br /> memorandum of sale from the selling agents (or
                      details of the buyer’s solicitors <br /> from you if it is
                      a private sale) and requested, paid for and received the{" "}
                      <br /> Leasehold Information Pack from the managing agents
                      and/or freeholder, we <br /> will prepare the contract
                      pack for the buyer’s solicitors.
                    </li>
                    <li>
                      As soon as your buyer is in a position to proceed (that is
                      once they have <br /> concluded their financial
                      arrangements and completed survey and
                      <br /> enquiries and searches), we shall discuss with you
                      and agree with your buyer’s solicitor a<br /> suitable
                      completion date for your sale. We will obtain up-to-date
                      figures from
                      <br /> the managing agents and/or freeholders to enable us
                      to calculate
                      <br /> apportionments and prepare a completion statement
                      showing the amount due <br /> from the buyer’s solicitor.
                      If you have a related purchase, we will agree this date
                      <br /> with your seller’s solicitor.
                    </li>
                    <li>
                      Once contracts have been exchanged, there is a legally
                      binding agreement <br /> between you and your buyer for
                      the sale and purchase of your property.
                    </li>
                    <li>
                      On the completion date, we will notify you when we have
                      received the sale <br /> proceeds and advise your estate
                      agent if the sale was negotiated by them and <br /> pay
                      their account. We will also pay off any mortgage which you
                      have secured on
                      <br /> your property, and either return the net proceeds
                      to you or apply those funds to <br />
                      your related purchase.
                    </li>
                  </ul>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: ".5em",
                    }
                  }
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Freehold purchase
                  </div>
                  <div>In what circumstances may the costs change?</div>
                  <div>
                    We want to ensure you only pay for the service you receive,
                    so, as an example, a simple freehold <br /> purchase with
                    standard funding arrangements will cost less than a complex
                    freehold purchase involving <br /> a lender who requires us
                    to undertake additional work on its behalf.
                  </div>
                  <div>
                    Some factors which could typically increase the cost of the
                    service you require are:
                  </div>
                  <ul>
                    <li>if the legal title is defective;</li>
                    <li>if the title is unregistered;</li>
                    <li>
                      if there is a management company that we need to engage
                      with to ensure <br /> compliance with any regulations
                      which may apply;
                    </li>
                    <li>
                      if we need to obtain a certificate of compliance for a
                      restriction on the title;
                    </li>
                    <li>if the property is subject to a rent charge;</li>
                    <li>
                      if we discover that the correct consents have not been
                      obtained for alteration <br /> works;
                    </li>
                    <li>
                      if you are obtaining financial contributions from third
                      parties;
                    </li>
                    <li>
                      if you are purchasing using a complex funding arrangement;
                    </li>
                    <li>
                      if you have the benefit of a Help to Buy ISA or Lifetime
                      ISA;
                    </li>
                    <li>
                      if you are purchasing through an auction or from a lender
                      under a power of sale,
                      <br /> with tight deadlines to meet;
                    </li>
                    <li>
                      if documents or information are requested from you or any
                      other party, which <br /> requires our work to be
                      duplicated;
                    </li>
                    <li>
                      if the property is a new build or is being transferred out
                      of an existing title.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    What we will do for you
                  </div>
                  <small>
                    We will let you have a breakdown of our fees. It may include
                    some or all of the following matters:
                  </small>
                  <ul>
                    <li>
                      approving the contract and, if required, negotiating
                      amendments;
                    </li>
                    <li>reviewing the legal title to the property;</li>
                    <li>undertaking searches and raising enquiries;</li>
                    <li>reviewing your funding arrangements;</li>
                    <li>reporting to you on our investigations;</li>
                    <li>acting on behalf of, and reporting to your lender;</li>
                    <li>
                      accounting to you with a completion statement and
                      requesting monies from <br /> you;
                    </li>
                    <li>
                      exchanging contracts and undertaking pre-completion
                      searches;
                    </li>
                    <li>
                      completing the purchase for you, paying the purchase price
                      and any monies <br /> agreed for any items to the seller’s
                      solicitors;
                    </li>
                    <li>
                      submitting your stamp duty land tax return to HM Revenue
                      and Customs (or <br /> where the property is in Wales,
                      submitting your land transaction tax return to the <br />{" "}
                      Welsh Revenue Authority) and paying any duty owed;
                    </li>
                    <li>
                      registering your ownership of the property with HM Land
                      Registry;
                    </li>
                    <li>
                      sending copy documents to you following registration
                      together with any other <br />
                      documents which you may need when you come to sell the
                      property.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    In what circumstances will the above matters not apply to
                    me?
                  </div>
                  <small>
                    It is important to note that the information above relates
                    to residential conveyancing for individuals who <br /> are
                    selling their own property. If any of the circumstances
                    below apply, it is likely to involve additional <br /> work
                    or you may require advice from another department within the
                    practice:
                  </small>
                  <ul>
                    <li>
                      if you are purchasing the property as an investment;
                    </li>
                    <li>
                      if you are purchasing in the name of your limited company
                      or a partnership;
                    </li>
                    <li>
                      if the property you are buying is to be transferred out of
                      an existing title and <br />
                      documents need to be drafted.
                    </li>
                  </ul>
                  <div>Overview of the conveyancing process</div>
                  <small>
                    As members of the Law Society’s Conveyancing Quality Scheme
                    we follow the Law Society <br /> Conveyancing Protocol which
                    is designed to make the conveyancing process as
                    straightforward and <br /> efficient as possible.
                  </small>
                  <small>
                    The steps involved in the sale of your property will include
                    the following:
                  </small>
                  <ul>
                    <li>
                      Once we have received a memorandum of sale from the
                      selling agent, or details <br /> of the transaction from
                      you if your matter is a private sale, we will ask you to{" "}
                      <br /> complete a short questionnaire, provide evidence of
                      identity and your funding <br />
                      arrangements, including evidence as to the deposit, and to
                      put us in funds to <br /> enable us to commence searches.
                    </li>
                    <li>
                      The seller’s solicitors will supply us with a contract
                      pack, including title deeds to <br /> the property, a
                      plan, protocol forms (a property information form, and a
                      fittings <br /> and contents form), a contract and the
                      energy performance certificate.
                    </li>
                    <li>
                      We will check title to the property, order searches,
                      approve the contract and <br /> draft a transfer deed. We
                      will also raise any relevant enquiries with the seller’s{" "}
                      <br />
                      solicitors so that we can report to you thoroughly.
                    </li>
                    <li>
                      We would recommend you have a survey carried out, as we
                      are unable to advise <br /> you on matters such as the
                      physical structure of the building. If you are getting a{" "}
                      <br /> mortgage, your lender will also carry out a
                      valuation of the property, but please <br />
                      remember that the valuation is only for the benefit of the
                      lender and you should <br /> not rely on the valuation.
                      You should let us have a copy of your survey and mortgage
                      valuation.
                    </li>
                    <li>
                      Once we have received your mortgage offer, searches and
                      replies to enquiries,
                      <br /> we will provide you with a written report on the
                      property for you to consider.
                    </li>
                  </ul>
                  <div>OR</div>
                  <ul>
                    <li>
                      We will report to you on the legal title to the property,
                      the mortgage offer and results of searches as and when we
                      receive them rather than sending one lengthy report.
                    </li>
                    <li>
                      {" "}
                      We will also send you a contract and transfer deed to
                      sign, or you can attend the office to sign them and
                      discuss any questions you may have.
                    </li>
                    <li>
                      {" "}
                      If we are also instructed in your sale, we will ensure
                      that the two transactions can exchange simultaneously, and
                      supply you with completion statements setting out the
                      costs and disbursements incurred in relation to each
                      matter.
                    </li>
                    <li>
                      {" "}
                      As soon as all parties are in a position to proceed, we
                      will exchange contracts. This is the point at which the
                      agreement is binding, and you cannot pull out of the
                      transaction without incurring penalties. At the point of
                      exchange you should book your removals and put your
                      buildings insurance in place, as this is when the risk in
                      the new property will pass to you.
                    </li>
                    <li>
                      {" "}
                      We will order your mortgage advance, or ask you to put us
                      in funds for any balance required to complete.
                    </li>
                    <li>
                      {" "}
                      On the completion date, funds will be transferred between
                      solicitors and once completion has taken place, we will
                      notify you and the selling agents so that keys can be
                      released to you.
                    </li>
                    <li>
                      Post completion we will submit your stamp duty land tax
                      return to HM Revenue and Customs (or where the property is
                      in Wales, submit your land transaction return to the Welsh
                      Revenue Authority) and pay any duty owed. We will also
                      register you as owner with HM Land Registry and supply you
                      with evidence once HM Land Registry has completed our
                      application.
                    </li>
                  </ul>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: ".5em",
                    }
                  }
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Leasehold purchase
                  </div>
                  <div>In what circumstances may the costs change?</div>
                  <div>
                    We want to ensure you only pay for the service you receive,
                    so, as an example, a simple freehold <br /> purchase with
                    standard funding arrangements will cost less than a complex
                    freehold purchase involving <br /> a lender who requires us
                    to undertake additional work on its behalf.
                  </div>
                  <div>
                    Some factors which could typically increase the cost of the
                    service you require are:
                  </div>
                  <ul>
                    <li>
                      if the legal title is defective, the lease needs to be
                      extended or a deed of variation is required;
                    </li>
                    <li>if the title is unregistered;</li>
                    <li>if there is an intermediary leasehold title;</li>
                    <li>
                      if there is a management company that we need to engage
                      with to ensure <br /> compliance with any regulations
                      which may apply;
                    </li>
                    <li>
                      if we need to obtain a certificate of compliance for a
                      restriction on the title or <br /> you are required to
                      enter into a deed of covenant;
                    </li>
                    <li>
                      if we discover that the correct consents have not been
                      obtained for alteration <br /> works;
                    </li>
                    <li>
                      if you are obtaining financial contributions from third
                      parties;
                    </li>
                    <li>
                      if you are purchasing using a complex funding arrangement;
                    </li>
                    <li>
                      if you have the benefit of a Help to Buy ISA or Lifetime
                      ISA;
                    </li>
                    <li>
                      if you are purchasing through an auction or from a lender
                      under a power of sale,
                      <br /> with tight deadlines to meet;
                    </li>
                    <li>
                      if documents or information are requested from you or any
                      other party, which <br /> requires our work to be
                      duplicated;
                    </li>
                    <li>
                      if the property is a new build or is being transferred out
                      of an existing title.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    What we will do for you
                  </div>
                  <small>
                    We will let you have a breakdown of our fees. It may include
                    some or all of the following matters:
                  </small>
                  <ul>
                    <li>
                      approving the contract and, if required, negotiating
                      amendments;
                    </li>
                    <li>reviewing the legal title to the property;</li>
                    <li>undertaking searches and raising enquiries;</li>
                    <li>reviewing your funding arrangements;</li>
                    <li>reporting to you on our investigations;</li>
                    <li>acting on behalf of, and reporting to your lender;</li>
                    <li>
                      accounting to you with a completion statement and
                      requesting monies from <br /> you;
                    </li>
                    <li>
                      exchanging contracts and undertaking pre-completion
                      searches;
                    </li>
                    <li>
                      completing the purchase for you, paying the purchase price
                      and any monies <br /> agreed for any items to the seller’s
                      solicitors;
                    </li>
                    <li>
                      serving any required notices required under your lease;
                    </li>
                    <li>
                      making an application to the management company for a new
                      share certificate <br /> (if applicable);
                    </li>
                    <li>
                      obtaining a certificate of compliance from the
                      freeholder/managing agents for <br /> HM Land Registry
                      purposes;
                    </li>
                    <li>
                      submitting your stamp duty land tax return to HM Revenue
                      and Customs (or <br /> where the property is in Wales,
                      submitting your land transaction tax return to the <br />{" "}
                      Welsh Revenue Authority) and paying any duty owed;
                    </li>
                    <li>
                      registering your ownership of the property with HM Land
                      Registry.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    In what circumstances will the above matters not apply to
                    me?
                  </div>
                  <small>
                    It is important to note that the information above relates
                    to residential conveyancing for individuals who <br /> are
                    selling their own property. If any of the circumstances
                    below apply, it is likely to involve additional <br /> work
                    or you may require advice from another department within the
                    practice:
                  </small>
                  <ul>
                    <li>
                      if you are purchasing the property as an investment;
                    </li>
                    <li>
                      if you are acting in your capacity as director of a
                      company;
                    </li>
                    <li>
                      if the property you are buying is to be transferred out of
                      an existing title and <br /> documents need to be drafted
                      or negotiated.
                    </li>
                  </ul>
                  <div>Overview of the conveyancing process</div>
                  <small>
                    As members of the Law Society’s Conveyancing Quality Scheme
                    we follow the Law Society <br /> Conveyancing Protocol which
                    is designed to make the conveyancing process as
                    straightforward and <br /> efficient as possible.
                  </small>
                  <small>
                    The steps involved in the sale of your property will include
                    the following:
                  </small>
                  <ul>
                    <li>
                      Once we have received a memorandum of sale from the
                      selling agent, or details <br /> of the transaction from
                      you if your matter is a private sale, we will ask you to{" "}
                      <br /> complete a short questionnaire, provide evidence of
                      identity and your funding <br />
                      arrangements, including evidence as to the deposit, and to
                      put us in funds to <br /> enable us to commence searches.
                    </li>
                    <li>
                      The seller’s solicitors will supply us with a contract
                      pack, including title deeds to <br /> the property, a
                      plan, protocol forms (a property information form, and a
                      fittings <br /> and contents form), a contract and the
                      energy performance certificate.
                    </li>
                    <li>
                      We will check title to the property, order searches,
                      approve the contract and <br /> draft a transfer deed. We
                      will also raise any relevant enquiries with the seller’s{" "}
                      <br />
                      solicitors so that we can report to you thoroughly.
                    </li>
                    <li>
                      We would recommend you have a survey carried out, as we
                      are unable to advise <br /> you on matters such as the
                      physical structure of the building. If you are getting a{" "}
                      <br /> mortgage, your lender will also carry out a
                      valuation of the property, but please <br />
                      remember that the valuation is only for the benefit of the
                      lender and you should <br /> not rely on the valuation.
                      You should let us have a copy of your survey and mortgage
                      valuation.
                    </li>
                    <li>
                      Once we have received your mortgage offer, searches and
                      replies to enquiries,
                      <br /> we will provide you with a written report on the
                      property for you to consider.
                    </li>
                  </ul>
                  <div>OR</div>
                  <ul>
                    <li>
                      We will report to you on the legal title to the property,
                      the mortgage offer and results of searches as and when we
                      receive them rather than sending one lengthy report.
                    </li>
                    <li>
                      {" "}
                      We will also send you a contract and transfer deed to
                      sign, or you can attend the office to sign them and
                      discuss any questions you may have.
                    </li>
                    <li>
                      {" "}
                      If we are also instructed in your sale, we will ensure
                      that the two transactions can exchange simultaneously, and
                      supply you with completion statements setting out the
                      costs and disbursements incurred in relation to each
                      matter.
                    </li>
                    <li>
                      {" "}
                      As soon as all parties are in a position to proceed, we
                      will exchange contracts. This is the point at which the
                      agreement is binding, and you cannot pull out of the
                      transaction without incurring penalties. At the point of
                      exchange you should book your removals and put your
                      buildings insurance in place, as this is when the risk in
                      the new property will pass to you.
                    </li>
                    <li>
                      {" "}
                      We will order your mortgage advance, or ask you to put us
                      in funds for any balance required to complete.
                    </li>
                    <li>
                      {" "}
                      On the completion date, funds will be transferred between
                      solicitors and once completion has taken place, we will
                      notify you and the selling agents so that keys can be
                      released to you.
                    </li>
                    <li>
                      Post completion we will submit your stamp duty land tax
                      return to HM Revenue and Customs (or where the property is
                      in Wales, submit your land transaction tax return to the
                      Welsh Revenue Authority) and pay any duty owed. We will
                      also register you as owner with HM Land Registry and
                      supply you with evidence once HM Land Registry has
                      completed our application, and send you copies of the
                      title together with all documents which you may need when
                      you come to sell the property.
                    </li>
                  </ul>
                </div>
                <div
                  className="md:flex md:flex-col md:gap-[.5em]"
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: ".5em",
                    }
                  }
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Mortgages and remortgages
                  </div>
                  <div>In what circumstances may the costs change?</div>
                  <div>
                    We want to ensure you only pay for the service you receive,
                    so, as an example, a simple freehold <br /> purchase with
                    standard funding arrangements will cost less than a complex
                    freehold purchase involving <br /> a lender who requires us
                    to undertake additional work on its behalf.
                  </div>
                  <div>
                    Some factors which could typically increase the cost of the
                    service you require are:
                  </div>
                  <ul>
                    <li>if the legal title is defective;</li>
                    <li>if the title is unregistered;</li>
                    <li>
                      if there is a management company that we need to engage
                      with to ensure <br /> compliance with any regulations
                      which may apply;
                    </li>
                    <li>
                      if we need to obtain a certificate of compliance for a
                      restriction on the title;
                    </li>
                    <li>if the property is subject to a rent charge;</li>
                    <li>
                      if we discover that the correct consents have not been
                      obtained for alteration <br /> works;
                    </li>
                    <li>
                      if you are obtaining financial contributions from third
                      parties;
                    </li>
                    <li>
                      if you are purchasing using a complex funding arrangement;
                    </li>
                    <li>
                      if you have the benefit of a Help to Buy ISA or Lifetime
                      ISA;
                    </li>
                    <li>
                      if you are purchasing through an auction or from a lender
                      under a power of sale,
                      <br /> with tight deadlines to meet;
                    </li>
                    <li>
                      if documents or information are requested from you or any
                      other party, which <br /> requires our work to be
                      duplicated;
                    </li>
                    <li>
                      if the property is a new build or is being transferred out
                      of an existing title.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    What we will do for you
                  </div>
                  <small>
                    We will let you have a breakdown of our fees. It may include
                    some or all of the following matters:
                  </small>
                  <ul>
                    <li>acting on behalf of you and your lender;</li>
                    <li>reviewing the legal title to the property;</li>
                    <li>
                      undertaking searches and raising enquiries of the managing
                      agent and/or <br /> freeholder if the property is
                      leasehold, or freehold but served by a management <br />{" "}
                      company;
                    </li>
                    <li>
                      reviewing your mortgage offer and reporting to you on any
                      special conditions;
                    </li>
                    <li>
                      attending on you to sign the legal charge (mortgage deed)
                      and ensuring that <br /> you are comfortable with the
                      nature and effect of entering into the mortgage;
                    </li>
                    <li>
                      reporting to your lender on its standard form of
                      certificate of title;
                    </li>
                    <li>
                      undertaking pre-completion searches at HM Land Registry;
                    </li>
                    <li>accounting to you with a completion statement;</li>
                    <li>redeeming your existing mortgage;</li>
                    <li>registering the new mortgage with HM Land Registry.</li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    In what circumstances will the above matters not apply to
                    me?
                  </div>
                  <small>
                    It is important to note that the information above relates
                    to residential conveyancing for individuals who <br /> are
                    selling their own property. If any of the circumstances
                    below apply, it is likely to involve additional <br /> work
                    or you may require advice from another department within the
                    practice:
                  </small>
                  <ul>
                    <li>
                      if you require a transfer of equity as part of the
                      transaction;
                    </li>
                    <li>if the property is a ‘buy to let’; or</li>
                    <li>
                      if you own the property in a limited company or a
                      partnership.
                    </li>
                  </ul>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Overview of the conveyancing process
                  </div>
                  <small>
                    If you are at the end of your fixed rate with your current
                    lender and wish to switch to a more favourable <br /> rate
                    with a different lender, or decide to <br /> extract some
                    equity from your property, you may decide to remortgage.
                  </small>
                  <div>
                    You should take advice from a suitably qualified adviser
                    before proceeding, to ensure the product you choose meets
                    your individual needs.
                  </div>
                  <div>
                    Once we have received your new mortgage offer, we will
                    investigate title to your property to ensure that <br /> it
                    complies with your new lender’s requirements. We may need to
                    carry out searches and investigations <br /> and if you
                    already have a mortgage secured against your property, we
                    will make contact with the current <br /> lender to obtain a
                    redemption figure.
                  </div>
                  <div>
                    On the day of completion, we will obtain the advance from
                    your new lender, pay off your existing lender <br /> and
                    deal with registration formalities at HM Land Registry to
                    secure the new charge against your <br /> property.
                  </div>
                </div>
                {/* </div> */}
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
    </div>
  );
}

export default TextHowAboutFees;
