import * as Types from "./StatInfo.types";
import * as Styles from "./StatInfo.styles";
import { Typography } from "@material-ui/core";

const StatInfo = ({ title, value, icon }: Types.Props) => {
  return (
    <Styles.StatContainer>
      <Styles.InfoContainer>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </Styles.InfoContainer>
      <Styles.IconContainer>{icon}</Styles.IconContainer>
    </Styles.StatContainer>
  );
};

export default StatInfo;
