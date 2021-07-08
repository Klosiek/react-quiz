import * as Styles from "./LoginPage.styles";
import * as SharedStyles from "shared/styles";
import {
  loginWithEmail,
  loginWithGithub,
  loginWithGoogle,
  selectIsLoggedInAndIsEmailVerified,
} from "store/profile";
import toast, { Toaster } from "react-hot-toast";
import { Typography, Button, Link } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import { RoutesEnum } from "shared/enums";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link as RouterLink } from "react-router-dom";
import Input from "components/Input";
import { useSelector } from "react-redux";
import DividerWithText from "components/DividerWithText";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("The email is incorrect").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const isEmailVerified = useSelector(selectIsLoggedInAndIsEmailVerified);
  const {
    setFieldValue,
    errors,
    validateField,
    validateForm,
    isValid,
    submitForm,
  } = useFormik<{
    email: string;
    password: string;
  }>({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      validateForm();
      if (isValid) {
        loginWithEmail(values.email, values.password)
          .then(() => {
            isEmailVerified
              ? toast.success("Logged in")
              : toast.error("Confirm your adress email before loggin in");
          })
          .catch((err) => toast.error(`${err}`));
      }
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.id, e.target.value, false).then(() => {
      validateField(e.target.id);
    });
  };

  return (
    <Styles.LoginContainer>
      <Styles.HeaderContainer>
        <Typography variant="h5" gutterBottom>
          React Quiz
        </Typography>
        <Typography variant="h4">Sign in to your account</Typography>
        <Typography variant="h6" gutterBottom>
          Don't have an account?{" "}
          <Link component={RouterLink} to={RoutesEnum.Register}>
            Start free here!
          </Link>
        </Typography>
      </Styles.HeaderContainer>
      <Styles.FormContainer elevation={3}>
        <Styles.ProvidersContainer>
          <SharedStyles.ProviderButton
            variant="outlined"
            onClick={() => loginWithGithub()}
          >
            <FaGithub size={20} />
            Sign in with Github
          </SharedStyles.ProviderButton>
          <SharedStyles.ProviderButton
            variant="outlined"
            onClick={() => loginWithGoogle()}
          >
            <FcGoogle size={20} />
            Sign in with Google
          </SharedStyles.ProviderButton>
        </Styles.ProvidersContainer>
        <DividerWithText>OR</DividerWithText>
        <Styles.Form>
          <Input
            id="email"
            name="email"
            label="Email adress"
            size="small"
            required
            autoFocus
            helperText={errors.email ? errors.email : " "}
            onChange={onChange}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            size="small"
            required
            helperText={errors.password ? errors.password : " "}
            onChange={onChange}
          />
          <Button
            disabled={!isValid}
            variant="contained"
            color="primary"
            onClick={submitForm}
          >
            Login
          </Button>
        </Styles.Form>
      </Styles.FormContainer>

      <Toaster />
    </Styles.LoginContainer>
  );
};

export default LoginPage;
