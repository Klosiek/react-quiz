import * as Styles from "./LoginPage.styles";
import * as SharedStyles from "shared/styles";
import {
  loginWithEmail,
  loginWithGithub,
  loginWithGoogle,
} from "store/profile";
import toast, { Toaster } from "react-hot-toast";
import { Typography, Button, Divider, Link } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import ParseFirebaseErrors from "shared/ParseFirebaseErrors";
import { RoutesEnum } from "shared/enums";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Input from "components/Input";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("The email is incorrect").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
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
        toast.promise(loginWithEmail(values.email, values.password), {
          loading: "Loading",
          success: () => {
            history.push(RoutesEnum.HomePage);
            return "Logged in";
          },
          error: (err) => `This just happened: ${ParseFirebaseErrors(err)}`,
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
        <Divider />
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
