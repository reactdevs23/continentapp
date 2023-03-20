import { Routes, Route } from "react-router-dom";

//
import Header from "./components/Header/Header";
// import HexagonImage from "./components/Hexagon/Hexagon";

import MyProfile from "./components/pages/MyProfile/MyProfile";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import EditProfile from "./components/pages/EditProfile/EditProfile";
import Message from "./components/pages/Messages/Message";
import ConnectWallet from "./components/pages/ConnectWallet/ConnectWallet.js/ConnectWallet";
import SetUpYourProfile from "./components/pages/SetUpYourProfile/SetUpYourProfile";
import SelectProfilePicture from "./components/pages/SelectProfilePicture/SelectProfilePicture";
import ShareNft from "./components/pages/StartSharingYourNft/ShareNft";
import SinglePost from "./components/pages/Home/Posts/SinglePost/SinglePost";
import Posts from "./components/pages/Home/Posts/Posts";

import PostDetails from "./components/pages/Home/Posts/PostDetails/PostDetails";
import EditInformation from "./components/pages/Home/Posts/NftMore/Modals/EditInformation/EditInformation";
import { useDataContext } from "./components/Context";

function App() {
  const { posts } = useDataContext();
  return (
    <>
      <div className="container">
        <Header />
        <div className="rightSide">
          <Routes>
            <Route path="/" element={<Posts data={posts} />}></Route>
            <Route path="/profile" element={<MyProfile />}></Route>
            {/* <Route path="/userProfile" element={<UserProfile />}></Route>
            <Route path="/editprofile" element={<EditProfile />}></Route> */}
            <Route path="/messages/:id" element={<Message />} />
          </Routes>
        </div>
        <Routes>
          <Route path="post/:id" element={<PostDetails data={posts} />}></Route>
        </Routes>
        {/* <Header />

      <Routes>
        <Route path="/" element={<ConnectWallet />} />{" "}
        <Route path="/setupProfile" element={<SetUpYourProfile />}></Route>
        <Route
          path="/selectProfilePicture"
          element={<SelectProfilePicture />}
        ></Route>
        <Route path="/shreNft" element={<ShareNft />}></Route>
      </Routes> */}
      </div>{" "}
    </>
  );
}

export default App;
