import React, { useEffect, useState } from "react";
import logo from "../assets/Logo/logo.jpeg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Send,
  Twitter,
} from "@mui/icons-material";
import { Card, IconButton, TextField } from "@mui/material";
import ChatCard from "../Components/Cards/ChatCard";
import { uuidv4 } from "@firebase/util";
import { db } from "../fireBase/FireBase";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
} from "@firebase/firestore";

//
function TextMessage() {
  const [messages, setMessages] = useState("");
  console.log(messages);

  const handleDatabase = async () => {
    try {
      if (messages.length !== 0) {
        const uuid = uuidv4();
        // alert(uuid);
        await setDoc(doc(db, `USERS_DataBase`, uuid), {
          TextMessages: messages,
          accountId: uuid,
        });

        setMessages("");
      } else {
        alert("All fields required");
      }
    } catch (error) {
      alert("Error");
      console.error(error);
    }
  };

  const [allTextData, setAllTextData] = useState([]);
  console.log("All data", allTextData);

  useEffect(() => {
    const collectionRefUSersText = collection(db, "USERS_DataBase");
    const query_Selector = query(collectionRefUSersText);

    const data_Container = onSnapshot(query_Selector, (data_Onapshot) => {
      const text_Container = [];

      data_Onapshot.forEach((doc) => {
        text_Container.push(doc.data());
      });

      setAllTextData(text_Container);
    });
    return () => {
      data_Container();
    };
  }, []);

  return (
    <div
      className="md:w-[100%] md:h-[100vh] md:flex md:flex-row    sm:w-[100%] sm:h-[100vh] sm:flex sm:flex-row"
      // style={{ background: "red" }}
    >
      {/* Left Contents */}
      <div
        className="md:basis-[20%] md:basis-[50%] md:flex md:flex-col md:justify-center md:items-center md:block   sm:hidden  sm:basis-[0%] sm:basis-[50%] sm:flex sm:flex-col sm:justify-center sm:items-center"
        // style={{ background: "green" }}
        style={{ background: "rgb(230, 225, 225)" }}
      >
        <div className="md:flex md:flex-col md:gap-[1em] md:justify-center md:items-center   sm:flex sm:flex-col sm:gap-[1em] sm:justify-center sm:items-center">
          <img src={logo} className="md:w-[40%] sm:w-[40%]" alt="" />
          <div>Tittle</div>
          <ul
            className="md:flex md:flex-row md:justify-center md:items-center md:gap-[1em]  md:pl-[5%] md:list-none    sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-[.5em]  sm:pl-[5%] sm:list-none"
            style={
              {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // gap: "1em",
                // listStyle: "none",
              }
            }
          >
            <li>
              {" "}
              <Instagram sx={{ fontSize: "15px" }} />
            </li>
            <li>
              <Facebook sx={{ fontSize: "15px" }} />
            </li>
            <li>
              <Twitter sx={{ fontSize: "15px" }} />
            </li>
            <li>
              <LinkedIn sx={{ fontSize: "15px" }} />
            </li>
          </ul>
        </div>
      </div>

      {/* Right Contents */}
      <div
        className="md:basis-[80%] md:overflow-y-scroll md:basis-[50%] md:flex md:flex-col  sm:basis-[100vw] sm:basis-[50%] sm:flex sm:flex-col "
        // style={{ background: "yellow" }}
      >
        <div
          className="md:basis-[90%] sm:basis-[90%] md:flex md:flex-col md:gap-[10px] md:justify-start md:pt-[5%] md:pl-[8px]"
          // style={{ background: "black" }}
        >
          {allTextData.map((data, index) => {
            const { TextMessages } = data;

            return (
              <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <ChatCard key={index} content={TextMessages} />
                </div>
              </>
            );
          })}
        </div>
        <div
          className="md:basis-[10%] md:flex md:flex-row   sm:basis-[10%] sm:flex sm:flex-row"
          // style={{ background: "pink" }}
        >
          <div
            className="md:basis-[90%] md:flex md:justify-center md:items-center  sm:basis-[80%] sm:flex sm:justify-center sm:items-center"
            // style={{ background: "cyan" }}
          >
            <TextField
              className="md:w-[55vw] sm:w-[75vw]"
              placeholder="Ask me anything"
              value={messages}
              onChange={(e) => {
                setMessages(e.target.value);
              }}
            />
          </div>
          <div
            className="md:basis-[10%] md:flex md:justify-center md:items-center     sm:basis-[20%] sm:flex sm:justify-center sm:items-center"
            // style={{ background: "peru" }}
          >
            <IconButton onClick={handleDatabase}>
              <Send className="md:text-[50%] sm:text-[50%]" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextMessage;
