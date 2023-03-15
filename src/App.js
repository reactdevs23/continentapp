import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet.js/ConnectWallet";

import EditProfile from "./components/EditProfile/EditProfile";
import Header from "./components/Header/Header";
import HexagonImage from "./components/Hexagon/Hexagon";

import Message from "./components/Messages/Message";
import MyProfile from "./components/MyProfile/MyProfile";
import SelectProfilePicture from "./components/SelectProfilePicture/SelectProfilePicture";
import SetUpYourProfile from "./components/SetUpYourProfile/SetUpYourProfile";
import ShareNft from "./components/StartSharingYourNft/ShareNft";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<ConnectWallet />} />{" "}
        <Route path="/setupProfile" element={<SetUpYourProfile />}></Route>
        <Route
          path="/selectProfilePicture"
          element={<SelectProfilePicture />}
        ></Route>
        <Route path="/shreNft" element={<ShareNft />}></Route>
      </Routes>
    </div>
  );
}

export default App;
