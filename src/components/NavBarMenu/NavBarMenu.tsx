import * as Types from "./NavBarMenu.types";
// import * as Styles from "./NavBarMenu.styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { BiBarChartAlt } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { PanelEnum } from "shared/enums";
import { useFirestoreConnect } from "react-redux-firebase";

const NavBarMenu = ({ view, setView }: Types.Props) => {
  useFirestoreConnect([{ collection: "profiles" }]);
  return (
    <List>
      <ListItem
        button
        selected={view === PanelEnum.Dashboard}
        onClick={() => setView(PanelEnum.Dashboard)}
      >
        <ListItemIcon>
          <BiBarChartAlt size="24px" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        selected={view === PanelEnum.Game}
        onClick={() => setView(PanelEnum.Game)}
      >
        <ListItemIcon>
          <GrGamepad size="24px" />
        </ListItemIcon>
        <ListItemText primary="Game" />
      </ListItem>
      <ListItem
        button
        selected={view === PanelEnum.Friends}
        onClick={() => setView(PanelEnum.Friends)}
      >
        <ListItemIcon>
          <IoPeopleOutline size="24px" />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItem>
      <ListItem
        button
        selected={view === PanelEnum.Settings}
        onClick={() => setView(PanelEnum.Settings)}
      >
        <ListItemIcon>
          <IoSettingsOutline size="24px" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );
};

export default NavBarMenu;
