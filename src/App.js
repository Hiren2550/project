import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signuppage from "./pages/Signuppage";
import Signinpage from "./pages/Signinpage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Profilepage from "./pages/Profilepage";
import Createpostpage from "./pages/Createpostpage";
import UserPostListpage from "./pages/UserPostListpage";
import OtherProfilepage from "./pages/OtherProfilepage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<Signuppage />} />
        <Route path="/sign-in" element={<Signinpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/other-profile/:id" element={<OtherProfilepage />} />
        <Route path="/user-post/:id" element={<UserPostListpage />} />
        <Route path="/create-post" element={<Createpostpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
