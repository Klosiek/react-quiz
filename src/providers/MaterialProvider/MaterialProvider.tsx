import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import * as Types from "./MaterialProvider.types";
import * as Styles from "./MaterialProvider.styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61dafb",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const MaterialProvider = ({ children }: Types.Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Styles.PageContainer>{children}</Styles.PageContainer>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default MaterialProvider;
