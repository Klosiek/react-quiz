import * as Styles from "./DashboardPanel.styles";
import * as SharedStyles from "shared/styles";
import { Chart, Doughnut } from "react-chartjs-2";
import { Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectCurrentUserProfile } from "store/profile";
import { GrGamepad } from "react-icons/gr";
import { ImFire } from "react-icons/im";
import { BsBullseye } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StatInfo from "components/StatInfo";

const DashboardPanel = () => {
  const user = useSelector(selectCurrentUserProfile);
  const data = {
    labels: ["Wins", "Loses", "Draws"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 5, 1],
        backgroundColor: ["#BDD358", "#E5625E", "#E5E059"],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };
  return (
    <Styles.Container>
      <Styles.TopInfoContainer>
        <StatInfo
          title="Games Played"
          value={`${user.games ? user.games.length : 0}`}
          icon={<GrGamepad size="48px" />}
        />
        <StatInfo title="Winstreak" value="0" icon={<ImFire size="48px" />} />
        <StatInfo
          title="Accuracy"
          value="0%"
          icon={<BsBullseye size="48px" />}
        />
      </Styles.TopInfoContainer>
      <Styles.BottomStatsContainer>
        <SharedStyles.PaperContainer>
          <Styles.Header variant="h5">Experience</Styles.Header>
          <Divider />
          <Styles.ChartContainer>
            <CircularProgressbar
              maxValue={1000}
              value={user.experience % 1000}
              text={`${Math.floor(user.experience / 1000)} lvl`}
            />
          </Styles.ChartContainer>
          ;
        </SharedStyles.PaperContainer>
        <SharedStyles.PaperContainer>
          <Styles.Header variant="h5">Stats</Styles.Header>
          <Divider />
          <Styles.ChartContainer>
            <Doughnut data={data} type={Chart} />
          </Styles.ChartContainer>
        </SharedStyles.PaperContainer>
        <SharedStyles.PaperContainer>
          <Styles.Header variant="h5">History</Styles.Header>
          <Divider />
          <Styles.ChartContainer>
            <Doughnut data={data} type={Chart} />
          </Styles.ChartContainer>
        </SharedStyles.PaperContainer>
      </Styles.BottomStatsContainer>
    </Styles.Container>
  );
};

export default DashboardPanel;
