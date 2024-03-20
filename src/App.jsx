import { Route, Routes } from "react-router";
import LatestNews from "./Screens/LatestNews";
import Login from "./Screens/Login";
import LoginAccout from "./Screens/LoginAccout";
import ForgotEmail from "./Screens/ForgotEmail";
import Register from "./Screens/Register";
import TextHome from "./Screens/TextHome";
import TextGetQuote from "./Screens/TextGetQuote";
import TextConveyancingSolicitors from "./Screens/TextConveyancingSolicitors";
import TextImmigration from "./Screens/TextImmigration";
import TextWillandProbate from "./Screens/TextWillandProbate";
import TextEmploymentLaw from "./Screens/TextEmploymentLaw";
import TextFamilyLaw from "./Screens/TextFamilyLaw";
import TextLandLordTenant from "./Screens/TextLandLordTenant";
import TextAboutUs from "./Screens/TextAboutUs";
import TextContact from "./Screens/TextContact";
import TextRead1 from "./Screens/TextRead1";
import TextRead2 from "./Screens/TextRead2";
import TextRead3 from "./Screens/TextRead3";
import TextRead4 from "./Screens/TextRead4";
import TextHowAboutFees from "./Screens/TextHowAboutFees";
import { Message } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import TextMessage from "./Screens/TextMessage";
import NestedRoutesWithMessageIcon from "./Screens/NestedRoutesWithMessageIcon";
import AdminTextMessage from "./Screens/AdminTextMessages";
import notificationSound from "../src/assets/audio/notificationSound.mp3";

function App() {
  return (
    <>
      <audio id="mySound" src={notificationSound} preload="auto"></audio>

      <Routes>
        <Route element={<NestedRoutesWithMessageIcon />}>
          <Route path="/" element={<TextHome />} />
          <Route path="/get-quote" element={<TextGetQuote />} />
          <Route path="/contact" element={<TextContact />} />
          <Route path="/about_Us" element={<TextAboutUs />} />
          <Route path="/latest_News" element={<LatestNews />} />
        </Route>

        <Route path="/messages" element={<TextMessage />} />

        <Route path="/admin-messages" element={<AdminTextMessage />} />

        <Route
          path="/Conveyancing_Solicitors"
          element={<TextConveyancingSolicitors />}
        />
        <Route path="/Immigration" element={<TextImmigration />} />
        <Route path="/EmploymentLaw" element={<TextEmploymentLaw />} />
        <Route path="/FamilyLaw" element={<TextFamilyLaw />} />
        <Route path="/LandLord" element={<TextLandLordTenant />} />
        <Route path="/willandprobate" element={<TextWillandProbate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginAccount" element={<LoginAccout />} />
        <Route path="/forgot_account" element={<ForgotEmail />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/howaboutfees" element={<TextHowAboutFees />} />

        <Route
          path="/Could_tighter_restrictions_mean_home_moves_has_to_stop"
          element={<TextRead1 />}
        />
        <Route path="/read_conveyancing" element={<TextRead2 />} />

        <Route
          path="/UK_to_expand_skilled_occupations_list"
          element={<TextRead3 />}
        />

        <Route
          path="/New_95_mortgage_scheme_launches_today"
          element={<TextRead4 />}
        />
      </Routes>
    </>
  );
}

export default App;
