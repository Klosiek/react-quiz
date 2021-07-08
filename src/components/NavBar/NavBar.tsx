// import * as Types from "./NavBar.types";
import * as Styles from "./NavBar.styles";
import { Divider } from "@material-ui/core";
import UserBadge from "components/UserBadge";
import { useSelector } from "react-redux";
import {
  selectCurrentUserProfile,
  selectUser,
  selectUserProfileById,
  test,
} from "store/profile";
import { useFirestoreConnect } from "react-redux-firebase";
import NavBarMenu from "components/NavBarMenu";

const NavBar = () => {
  useFirestoreConnect([{ collection: "profiles" }]);
  const user = useSelector(
    selectUserProfileById("JfwEVSLVd0Y3GNpe9ZaQhVLgAWc2")
  );
  const selectTest = useSelector(test);
  return (
    <Styles.Container>
      <UserBadge />
      <Divider />
      <NavBarMenu />
    </Styles.Container>
  );
};

export default NavBar;
