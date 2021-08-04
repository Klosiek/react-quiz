import DashboardPanel from "components/panels/DashboardPanel";
import FriendsPanel from "components/panels/FriendsPanel";
import GamePanel from "components/panels/GamePanel";
import SettingsPanel from "components/panels/SettingsPanel";
import { PanelEnum } from "shared/enums";
import * as Types from "./HomePage.types";
import * as Styles from "./HomePage.styles";
import { useFirestoreConnect } from "react-redux-firebase";

const HomePage = ({ view }: Types.Props) => {
  useFirestoreConnect([{ collection: "profiles" }]);
  return (
    <Styles.Container style={{ padding: "50px" }}>
      {view === PanelEnum.Dashboard && <DashboardPanel />}
      {view === PanelEnum.Game && <GamePanel />}
      {view === PanelEnum.Friends && <FriendsPanel />}
      {view === PanelEnum.Settings && <SettingsPanel />}
    </Styles.Container>
  );
};

export default HomePage;
