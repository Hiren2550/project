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
import PrivateRoute from "./components/PrivateRoute";
import Notfound from "./components/Notfound";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route path="/sign-up" element={<Signuppage />} />
        <Route path="/sign-in" element={<Signinpage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profilepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/other-profile/:id"
          element={
            <PrivateRoute>
              <OtherProfilepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-post/:id"
          element={
            <PrivateRoute>
              <UserPostListpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-post"
          element={
            <PrivateRoute>
              <Createpostpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <Aboutpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contactpage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
