// import * as Types from "./HomePage.types";
// import * as Styles from "./HomePage.styles";
import { logout, selectLoggedIn } from "store/profile";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector(selectLoggedIn);
  return (
    <div
      onClick={() => {
        console.log(user);
        logout();
      }}
    >
      Wyloguj
    </div>
  );
};

export default HomePage;
