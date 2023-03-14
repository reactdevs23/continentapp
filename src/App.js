import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet.js/ConnectWallet";

import EditProfile from "./components/EditProfile/EditProfile";
import Header from "./components/Header/Header";

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
      <div className="rightSide">
        <Routes>
          <Route path="/" element={<MyProfile />}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/wallets" element={<ConnectWallet />} />{" "}
          <Route path="/setupProfile" element={<SetUpYourProfile />}></Route>
          <Route
            path="/selectProfilePicture"
            element={<SelectProfilePicture />}
          ></Route>
          <Route path="/shreNft" element={<ShareNft />}></Route>
          <Route path="/messages/:id" element={<Message />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
