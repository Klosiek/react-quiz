import * as Types from "./LoginPage.types";
import * as Styles from "./LoginPage.styles";
import { loginWithEmail, loginWithGithub, loginWithGoogle } from "store/user";
import toast, { Toaster } from "react-hot-toast";
import {
  Container,
  Paper,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import ParseFirebaseErrors from "shared/ParseFirebaseErrors";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/enums";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("The email is incorrect").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = ({}: Types.Props) => {
  const history = useHistory();

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
        loginWithEmail(values.email, values.password).catch((err) => {
          toast.error(ParseFirebaseErrors(err), { position: "bottom-center" });
        });
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
          <a href={RoutesEnum.Register}>Start free here!</a>
        </Typography>
      </Styles.HeaderContainer>
      <Styles.FormContainer elevation={3}>
        <Styles.ProvidersContainer>
          <Styles.ProviderButton
            variant="outlined"
            onClick={() => loginWithGithub()}
          >
            <FaGithub size={20} />
            Sign in with Github
          </Styles.ProviderButton>
          <Styles.ProviderButton
            variant="outlined"
            onClick={() => loginWithGoogle()}
          >
            <FcGoogle size={20} />
            Sign in with Google
          </Styles.ProviderButton>
        </Styles.ProvidersContainer>
        <Divider />
        <Styles.Form>
          <Styles.Input
            variant="outlined"
            id="email"
            name="email"
            label="Email adress"
            size="small"
            required
            helperText={errors.email}
            onChange={onChange}
          />
          <Styles.Input
            variant="outlined"
            id="password"
            name="password"
            label="Password"
            size="small"
            required
            helperText={errors.password}
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

{
  /* <Styles.InfoContaier>
If you are getting ready for interview in react.js this quiz might be
helpfull for you! Play on your own or challenge your friends. Have fun
and learn at the same time. Godspeed!
</Styles.InfoContaier> */
}
