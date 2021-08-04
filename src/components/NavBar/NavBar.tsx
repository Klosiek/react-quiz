import * as Types from "./NavBar.types";
import * as Styles from "./NavBar.styles";
import { Divider } from "@material-ui/core";
import UserBadge from "components/UserBadge";
import NavBarMenu from "components/NavBarMenu";

const NavBar = ({ view, setView }: Types.Props) => {
  return (
    <Styles.Container>
      <UserBadge />
      <Divider />
      <NavBarMenu view={view} setView={setView} />
    </Styles.Container>
  );
};

export default NavBar;
