// import * as Types from "./HomeAppBar.types";
import * as Styles from "./HomeAppBar.styles";
import {
  AppBar,
  Badge,
  IconButton,
  Popover,
  Typography,
} from "@material-ui/core";
import { logout } from "store/profile";
import { IoNotifications } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { useState } from "react";

const HomeAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  return (
    <AppBar position="static">
      <Styles.StyledToolbar>
        <Typography variant="h5">react-quiz</Typography>
        <div style={{ display: "flex" }}>
          <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            The content of the Popover.
          </Popover>
          <IconButton
            onClick={(event) => setAnchorEl(event.currentTarget)}
            aria-label="notifications"
            color="inherit"
          >
            <Badge badgeContent={2} color="secondary">
              <IoNotifications />
            </Badge>
          </IconButton>
          <IconButton>
            <ImExit onClick={logout} />
          </IconButton>
        </div>
      </Styles.StyledToolbar>
    </AppBar>
  );
};

export default HomeAppBar;
