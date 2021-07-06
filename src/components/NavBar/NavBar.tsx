import * as Types from "./NavBar.types";
import * as Styles from "./NavBar.styles";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "store/profile";
import UserBadge from "components/UserBadge";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const user = useSelector(selectUser);
  return (
    <AppBar position="static">
      <Styles.StyledToolbar>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <Typography variant="h5">react-quiz</Typography>
        <div style={{ display: "flex" }}>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <IoNotifications />
            </Badge>
          </IconButton>
          <UserBadge />
        </div>
        {/* </div> */}
      </Styles.StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
