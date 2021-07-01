import * as Styles from "./RegisterPage.styles";
import * as SharedStyles from "shared/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Avatar,
  Button,
  Link,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { RoutesEnum } from "shared/enums";
import { Link as RouterLink } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters long")
    .required("Please enter your password"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please repeat your password"),
});

const RegisterPage = () => {
  const matches = useMediaQuery("(min-width:600px)");

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
    repeatPassword: string;
  }>({
    initialValues: { email: "", password: "", repeatPassword: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      validateForm();
      if (isValid) {
      }
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.id, e.target.value, false).then(() => {
      validateField(e.target.id);
    });
  };

  return (
    <Styles.RegisterContainer>
      <Styles.FormContainer>
        <Styles.HeaderContainer>
          <Typography variant="h5" gutterBottom>
            React Quiz
          </Typography>
          <Typography variant="h4">Welcome to React Quiz</Typography>
          <Typography variant="h6" gutterBottom>
            Enter your info to get started
          </Typography>
        </Styles.HeaderContainer>
        <SharedStyles.Input
          id="email"
          name="email"
          label="Email address"
          variant="outlined"
          size="small"
          helperText={errors.email ? errors.email : " "}
          onChange={onChange}
        />
        <SharedStyles.Input
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          size="small"
          helperText={errors.password ? errors.password : " "}
          onChange={onChange}
        />
        <SharedStyles.Input
          id="repeatPassword"
          name="repeatPassword"
          label="Repeat password"
          variant="outlined"
          size="small"
          helperText={errors.repeatPassword ? errors.repeatPassword : " "}
          onChange={onChange}
        />
        <Button
          disabled={!isValid}
          variant="contained"
          color="primary"
          onClick={submitForm}
        >
          Sign up
        </Button>
        <div>
          Already have an account?{" "}
          <Link component={RouterLink} to={RoutesEnum.Login}>
            Log in to React Quiz
          </Link>
        </div>
      </Styles.FormContainer>
      {matches && (
        <Styles.InfoContainer>
          <Typography variant="h5">
            If you are getting ready for interview in React.js this quiz might
            be helpfull for you! Play on your own or challenge others. Have fun
            and learn at the same time. Godspeed!
          </Typography>
          <Styles.AvatarContainer>
            <Avatar
              alt="Klosiek"
              src="https://e-kursy-walut.pl/wp-content/uploads/2021/05/dogecoin-shiba.jpg"
              imgProps={{
                style: { height: "40px" },
              }}
            />
            <div style={{ marginLeft: "16px" }}>
              <Typography variant="h6">Sebastian Kłosiński</Typography>
              <div style={{ opacity: 0.6 }}>React Developer</div>
            </div>
          </Styles.AvatarContainer>
        </Styles.InfoContainer>
      )}
    </Styles.RegisterContainer>
  );
};

export default RegisterPage;