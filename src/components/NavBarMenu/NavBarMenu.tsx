import * as Types from "./NavBarMenu.types";
import * as Styles from "./NavBarMenu.styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { BiBarChartAlt } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";

const NavBarMenu = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <BiBarChartAlt size="24px" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GrGamepad size="24px" />
        </ListItemIcon>
        <ListItemText primary="Game" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <IoPeopleOutline size="24px" />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <IoSettingsOutline size="24px" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );
};

export default NavBarMenu;
