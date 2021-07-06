// import * as Types from "./HomePage.types";
// import * as Styles from "./HomePage.styles";
import { logout, selectUser } from "store/profile";
import { useSelector } from "react-redux";
import Navbar from "components/NavBar";

const HomePage = () => {
  return (
    // <div style={{ width: "100%" }}>
    <div
      onClick={() => {
        // console.log(user);
        logout();
      }}
    >
      Wyloguj
    </div>
    // </div>
  );
};

export default HomePage;
