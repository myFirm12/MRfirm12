import {
  AccessTimeFilledOutlined,
  AccountBalanceOutlined,
  Email,
  HeadsetMicOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import BoxOfContacts from "../BoxOfContacts/BoxOfContacts";
import MultilineTextFields from "../CustomTextField/MultilineTextFields";
import { CustomTextField } from "../CustomTextField/CustomTextField";
import ComboBox from "../AutoComplete/ComboBox";

// DataBase
import { uuidv4 } from "@firebase/util";
import { db } from "../../fireBase/FireBase";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
} from "@firebase/firestore";

function ContactsForm() {
  const [firstName, setFirstName] = useState("");
  console.log("This is name", firstName);

  const handleDatabase = async () => {
    try {
      if (firstName.length !== 0) {
        const uuid = uuidv4();
        alert(uuid);
        await setDoc(doc(db, `USERS_NAME`, uuid), {
          UserName: firstName,
          accountId: uuid,
        });

        setFirstName("");
      } else {
        alert("All fields required");
      }
    } catch (error) {
      alert("Error");
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="md:flex md:flex-row md:h-[100%]  sm:flex sm:flex-col sm:h-[100%]"
        style={
          {
            // display: "flex",
            // flexDirection: "row",
            // height: "100%",
          }
        }
      >
        {/* Left contact */}
        <div
          className="md:basis-[50%] md:flex md:flex-col   sm:basis-[40%] sm:flex sm:flex-col"
          style={
            {
              // flex: ".5",
              // display: "flex",
              // justifyContent: "center",
              // flexDirection: "column",
            }
          }
        >
          {/* head for contacts */}
          <div
            className="md:basis-[20%] md:flex md:justify-center md:items-center     sm:basis-[20%] sm:flex sm:justify-center sm:items-center"
            style={
              {
                // flex: ".2",
                // background: "red",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            <h1>Contact Our Team</h1>
          </div>
          <div
            className="md:basis-[80%] sm:basis-[80%]"
            style={
              {
                // flex: ".8",
                // background: "pink",
                // display: "flex",
                // flexWrap: "wrap",
              }
            }
          >
            <div
              className="md:flex  md:gap-[.1em] md:h-[80%] md:justify-center   sm:flex  sm:gap-[.1em] sm:h-[80%] sm:justify-center"
              style={
                {
                  // display: "flex",
                  // flexWrap: "wrap",
                  // gap: ".5em",
                  // width: "23%",
                  // height: "80%",
                  // justifyContent: "center",
                  // alignContent: "start",
                }
              }
            >
              <div
                className="md:flex md:flex-wrap md:gap-[.1em] md:w-[100%] md:justify-center md:place-content-center    sm:flex sm:flex-wrap sm:gap-[.1em] sm:w-[100%] sm:justify-center sm:place-content-center"
                style={
                  {
                    // display: "flex",
                    // justifyContent: "center",
                    // flexWrap: "wrap",
                    // width: "100%",
                    // placeContent: "center",
                    // height: "100%",
                  }
                }
              >
                <BoxOfContacts
                  icons={<HeadsetMicOutlined />}
                  head={"GENERAL ENQUIRIES"}
                  num={"0208 586 5657"}
                  gmail={"info@lawandlawyers.co.uk"}
                />
                <BoxOfContacts
                  icons={<Email />}
                  head={"NEW BUSINESS"}
                  num={"info@lawandlawyers.co.uk"}
                />
                <BoxOfContacts
                  icons={<AccountBalanceOutlined />}
                  head={"ACCOUNTS/ PAYMENTS"}
                  num={"accounts@lawandlawyers.co.uk"}
                />
                <BoxOfContacts
                  icons={<AccessTimeFilledOutlined />}
                  head={"OPENING HOURS"}
                  num={"Monday to Friday: 9:00 to 17:30"}
                  gmail={"Closed on Weekends & Bank"}
                  gmailP={"Holidays "}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right contact */}
        <div
          className="md:basis-[50%] md:flex md:flex-col   sm:basis-[60%] sm:flex sm:flex-col"
          style={{
            // flex: ".5",
            background: "rgb(179, 124, 69)",
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          {/* Contact Form */}
          <div
            className="md:basis-[12%] md:flex md:justify-start md:items-end md:pl-[9%]   
            
            sm:basis-[12%] sm:flex sm:justify-start sm:items-end sm:pl-[9%]"
            style={{
              color: "white",
            }}
          >
            <h1>Contact Form</h1>
          </div>
          <div
            className="md:basis-[88%] md:flex md:flex-col md:gap-[1em]  sm:basis-[88%] sm:flex sm:flex-col sm:gap-[1em]"
            style={
              {
                // flex: ".88",
                // background: "peru",
                // display: "flex",
                // flexDirection: "column",
                // gap: "1em",
              }
            }
          >
            <div
              className="md:basis-[10%] md:flex-row md:flex md:justify-center md:items-center md:gap-[1em]  sm:basis-[10%] sm:flex sm:justify-center sm:items-center sm:gap-[1em] sm:flex-col"
              style={
                {
                  // flex: ".1",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // gap: "1em",
                }
              }
            >
              <CustomTextField
                onchange={(e) => {
                  setFirstName(e.target.value);
                }}
                className={"md:w-[20vw] sm:w-[80vw]"}
                placeholder={"Full Name"}
              />
              <CustomTextField
                className={"md:w-[20vw] sm:w-[80vw]"}
                placeholder={"Email"}
              />
            </div>
            <div
              className="md:basis-[10%] md:flex-row md:flex md:justify-center md:items-center md:gap-[1em]    sm:basis-[10%] sm:flex sm:justify-center sm:items-center sm:gap-[1em] sm:flex-col"
              style={
                {
                  // flex: ".1",
                  //   background: "cyan",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // gap: "1em",
                }
              }
            >
              {/* <CustomTextField width={"20vw"} /> */}
              <ComboBox
                third={"Worship street"}
                fourth={"Manchester"}
                second={"Manork Park"}
                // width={"20vw"}
                label={"_Please choose an option-"}
                first={"_Please choose an option-"}
                styl={"md:w-[20vw] sm:w-[80vw]"}
              />
              <CustomTextField
                className={"md:w-[20vw] sm:w-[80vw]"}
                placeholder={"Phone"}
              />
            </div>
            <div
              className="md:basis-[20%] md:flex md:justify-center md:items-start    sm:basis-[20%] sm:flex sm:justify-center sm:items-start"
              style={
                {
                  // flex: ".2",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "start",
                }
              }
            >
              {/* <MultilineTextFields /> */}
            </div>
            <div
              className="md:basis-[40%] md:flex md:flex-col md:gap-[1em] md:pl-[9%]    sm:basis-[40%] sm:flex sm:flex-col sm:gap-[1em] sm:pl-[9%]"
              style={
                {
                  // flex: ".4",
                  // display: "flex",
                  // flexDirection: "column",
                  // gap: "1em",
                  // paddingLeft: "9%",
                }
              }
            >
              <div style={{ color: "white" }}>
                Please note: We aim to respond to your query within 4 working
                hours.
              </div>
              <div onClick={handleDatabase}>
                <button
                  className="md:w-[20%] md:h-[6vh]  sm:w-[50%] sm:h-[6vh]"
                  style={{ background: "rgb(28, 28, 143)", color: "white" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsForm;
