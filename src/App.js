import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet.js/ConnectWallet";

import EditProfile from "./components/EditProfile/EditProfile";
import Header from "./components/Header/Header";

import Message from "./components/Messages/Message";
import MyProfile from "./components/MyProfile/MyProfile";
import SetUpYourProfile from "./components/SetUpYourProfile/SetUpYourProfile";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="rightSide">
          <Routes>
            <Route path="/" element={<SetUpYourProfile />}></Route>
            {/* <Route path="/" element={<MyProfile />}></Route> */}
            <Route path="/userProfile" element={<UserProfile />}></Route>
            <Route path="/editprofile" element={<EditProfile />}></Route>
            <Route path="/wallets" element={<ConnectWallet />} />
            <Route path="/messages/:id" element={<Message />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
