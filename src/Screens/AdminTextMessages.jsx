import React, { useEffect, useState } from "react";
import logo from "../assets/Logo/logo.jpeg";
import {
  Facebook,
  HeadsetMic,
  Instagram,
  LinkedIn,
  Send,
  Twitter,
} from "@mui/icons-material";
import { Avatar, Card, Chip, IconButton, TextField } from "@mui/material";
import ChatCard from "../Components/Cards/ChatCard";
import { uuidv4 } from "@firebase/util";
import { db } from "../fireBase/FireBase";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
  updateDoc,
  arrayUnion,
  getDoc,
} from "@firebase/firestore";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { v4 } from "uuid";
import moment from "moment";
import { formatDistanceToNow } from "date-fns";

//
function AdminTextMessage() {
  const [messages, setMessages] = useState("");
  const [userID, setuserID] = useState("");
  const [messageArray, setMessageArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const [visitorId, setVisitorID] = useState("");

  //   useEffect(() => {
  //     async function getVisitorId() {
  //       try {
  //         const fpPromise = FingerprintJS.load(); // Load the FingerprintJS agent
  //         const fp = await fpPromise;
  //         const result = await fp.get();
  //         console.log("Visitor ID:", result.visitorId);
  //         // alert(result.visitorId, "   visitorId");
  //         setuserID(result.visitorId);
  //       } catch (error) {
  //         console.error("Error getting visitor ID:", error);
  //       }
  //     }

  //     getVisitorId();
  //   }, []);

  // Initialize an agent at application startup.
  //

  // ;(async () => {
  //   // Get the visitor identifier when you need it.

  //   console.log(result.visitorId)
  // })()

  const handleDatabase = async () => {
    // getVisitorId();

    try {
      const uuid = v4();
      const dateSend = moment().format("YYYY-MM-DD HH:mm:ss");

      if (messages.trim() !== "") {
        //// END OF UPDATE

        const userToSelfMessageRef = doc(
          db,
          `Chats/${visitorId}/Contacts/Messages/Admin`,
          uuid
        );
        await setDoc(userToSelfMessageRef, {
          messageId: uuid,
          senderId: "Admin",
          recepientId: visitorId,
          // senderName: `${userLoginDetailsObject?.firstName} ${userLoginDetailsObject?.surname} `,
          recepientName: `visitor ${visitorId}`,
          message: messages,
          dateSent: dateSend,
        });

        // Message to other
        const userToOthersMessageRef = doc(
          db,
          `Chats/Admin/Contacts/Messages/${visitorId}`,
          uuid
        );
        await setDoc(userToOthersMessageRef, {
          messageId: uuid,
          senderId: "Admin",
          recepientId: visitorId,
          // senderName: `${userLoginDetailsObject?.firstName} ${userLoginDetailsObject?.surname} `,
          recepientName: `visitor ${visitorId}`,
          message: messages,
          dateSent: dateSend,
        });

        // alert("Message sent");
        setMessages("");
      }
    } catch (error) {
      // alert("Error");
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

  const compareDates = (a, b) => {
    const dateA = new Date(a.dateSent);
    const dateB = new Date(b.dateSent);
    return dateA - dateB;
  };

  useEffect(() => {
    // selectedUserDetailsObject?.contactId.length === 0 ?

    const userToSelfMessageRef = collection(
      db,
      `Chats/${visitorId === "" ? "empty" : visitorId}/Contacts/Messages/Admin`
    );

    const q = query(userToSelfMessageRef);
    const alldata = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());

        // alert(doc.id());
      });
      // alert("messages");

      console.log(items, "allmessages");
      setMessageArray(items.sort(compareDates));
    });
    return () => {
      alldata();
    };
  }, [visitorId]);

  useEffect(() => {
    const fetchData = async () => {
      const updateUsersWhoHaveInitiatedText = doc(
        db,
        `ChatUsers`,
        "AllUsersDoc"
      );

      const docSnap = await getDoc(updateUsersWhoHaveInitiatedText);
      const engagedUsersArray = docSnap.data()?.usersEngaged;

      console.log(docSnap.data(), "console updated 1");

      setUsersArray(engagedUsersArray);
    };

    fetchData();
  }, [visitorId]);

  useEffect(() => {
    const getAllUsersId = collection(db, `Chats`);

    const q = query(getAllUsersId);
    const alldata = onSnapshot(q, (querySnapshot) => {
      const items = [];
      const ids = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        ids.push(doc.id());
        // alert(doc.id());
      });
      // alert("messages");

      console.log(ids, "all users Id");
      console.log(items, "allmessages");
    });
    return () => {
      alldata();
    };
  }, []);

  const handleClick = (visitorId) => {
    setVisitorID(visitorId);
  };

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
          {usersArray.map((data, key) => {
            return (
              <div key={key}>
                <Chip
                  label={`Visitor ${key + 1}`}
                  variant="outlined"
                  color="primary"
                  style={{ width: "10vw", height: "5vh" }}
                  onClick={() => {
                    handleClick(data);
                  }}
                  clickable
                />
                {/* &nbsp; &nbsp;&nbsp;&nbsp; {data} */}
              </div>
            );
          })}

          <img src={logo} className="md:w-[40%] sm:w-[40%]" alt="" />

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
              <Instagram sx={{ fontSize: "20px" }} />
            </li>
            <li>
              <Facebook sx={{ fontSize: "20px" }} />
            </li>
            <li>
              <Twitter sx={{ fontSize: "20px" }} />
            </li>
            <li>
              <LinkedIn sx={{ fontSize: "20px" }} />
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
          style={{ maxHeight: "90%", overflowY: "scroll" }}
        >
          {/* {allTextData.map((data, index) => {
            const { TextMessages } = data;

            return (
              <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <ChatCard key={index} content={TextMessages} />
                </div>
              </>
            );
            
          })} */}
          {messageArray.length === 0 ? (
            <h4
              className="primaryTextColor"
              style={{ textAlign: "center" }}
            ></h4>
          ) : (
            messageArray &&
            messageArray.map((data, index) => {
              const {
                senderId,
                recepientId,
                senderName,
                recepientName,
                message,
                dateSent,
              } = data;

              // Assuming userLoginDetailsObject contains the accountId of the logged-in user

              if (senderId !== "Admin") {
                return (
                  <OtherUserMessage
                    key={index}
                    message={message}
                    dateSent={dateSent}
                  />
                );
              } else {
                return (
                  <LoginUserMessage
                    key={index}
                    message={message}
                    dateSent={dateSent}
                  />
                );
              }
            })
          )}
        </div>
        <div
          className="md:basis-[10%] md:flex md:flex-row   sm:basis-[10%] sm:flex sm:flex-row"
          // style={{ background: "pink" }}
        >
          <div
            className="md:basis-[90%] md:flex md:justify-center md:items-center sm:gap-[1vw]  sm:basis-[80%] sm:flex sm:justify-center sm:items-center"
            // style={{ background: "cyan" }}
          >
            <TextField
              className="md:w-[55vw] sm:w-[75vw] "
              style={{ marginLeft: "1vw" }}
              placeholder="Ask us anything"
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

export default AdminTextMessage;

const OtherUserMessage = ({ message, dateSent, profileImage }) => {
  const parsedTimestamp = new Date(dateSent);
  const formattedRelativeTime = formatDistanceToNow(parsedTimestamp, {
    addSuffix: true,
  });

  return (
    <li
      className="md:flex md:flex-col  sm:flex sm:flex-col"
      style={{
        padding: "0vh 1vw",
        // display: "flex",
        // flexDirection: "column",
        // background: "red",
      }}
    >
      <div
        style={{
          flex: ".95",
          display: "flex",
          // flexDirection: "row-reverse",
          gap: ".1vw",
        }}
      >
        <div style={{ flex: "1", padding: ".5vw" }}>
          <span
            style={{
              background: "#f2f2f2",
              padding: ".5vw",
              borderRadius: ".4vw",
              float: "left",
            }}
          >
            {message}
          </span>
        </div>
      </div>

      <div style={{ flex: ".05" }}>
        <span
          className="primaryTextColor"
          style={{
            float: "left",
            fontSize: ".7em",
            marginTop: "0vh",
          }}
        >
          {dateSent}
        </span>
      </div>
    </li>
  );
};

const LoginUserMessage = ({ message, dateSent, profileImage }) => {
  const parsedTimestamp = new Date(dateSent);
  const formattedRelativeTime = formatDistanceToNow(parsedTimestamp, {
    addSuffix: true,
  });
  return (
    <li
      className="md:flex md:flex-col  sm:flex sm:flex-col"
      style={{
        padding: "0vh 1vw",
        // display: "flex",
        // flexDirection: "column",
        // background: "red",
      }}
    >
      <div
        style={{
          flex: ".95",
          display: "flex",
          flexDirection: "row-reverse",
          gap: ".1vw",
        }}
      >
        <Avatar sx={{ width: 50, height: 50 }}>
          <HeadsetMic color="primary" />
        </Avatar>
        <div style={{ flex: "1", padding: ".5vw" }}>
          <span
            style={{
              background: "#5585FE",
              padding: ".5vw",
              borderRadius: ".4vw",
              float: "right",
            }}
          >
            {message}
          </span>
        </div>
      </div>

      <div style={{ flex: ".05" }}>
        <span
          className="primaryTextColor"
          style={{
            float: "right",
            fontSize: ".7em",
            marginTop: "0vh",
          }}
        >
          {dateSent}
        </span>
      </div>
    </li>
  );
};
