import * as Types from "./LoginPage.types";
import * as Styles from "./LoginPage.styles";
import { login } from "store/user";

const LoginPage = ({}: Types.Props) => {
  return (
    <div
      onClick={() => {
        login("klosiek19791@gmail.com", "test123");
      }}
    >
      Get user
    </div>
  );
};

export default LoginPage;
