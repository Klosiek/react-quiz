import * as Styles from "./LoadingScreen.styles";
import { CircularProgress } from "@material-ui/core";

const LoadingScreen = () => {
  return (
    <Styles.Container>
      <CircularProgress />
    </Styles.Container>
  );
};

export default LoadingScreen;
