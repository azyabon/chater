import * as S from "./Login.styled";
import Button from "../../components/Button";
import ShadowBlock from "../../components/ShadowBlock";
import Input from "../../components/Input";
import Link from "next/link";
import { FC } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { userAction } from "../../store/actions";
import Router from "next/router";

type Props = {
  fetchUserLogin?: any;
};

const Login: FC<Props> = ({ fetchUserLogin }) => {
  const regPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g;
  const regEmail =
    /([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+/g;
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("This field is required")
      .matches(regEmail, "Неправильный email"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Minimum 8 characters")
      .matches(regPass, "Пароль должен содержать хотя бы 1 число; a-z; A-Z"),
  });

  return (
    <S.Login>
      <ShadowBlock>
        <S.LoginTitle>
          <h2>SignIn</h2>
          <p>Please, enter in your account</p>
        </S.LoginTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={({ email, password }) => {
            const postData: any = {
              email,
              password,
            };
            fetchUserLogin(postData).then(() => {
              Router.push("/");
            });
          }}
          // validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <S.LoginForm>
              <Input
                id={"email"}
                placeholder={"Email"}
                type={"text"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <S.Error>{errors.email}</S.Error>
              )}
              <Input
                id={"password"}
                placeholder={"Password"}
                type={"password"}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <S.Error>{errors.password}</S.Error>
              )}
              <Button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                style={{ width: "100%", textTransform: "uppercase" }}
                type={"submit"}
              >
                Sign In
              </Button>
            </S.LoginForm>
          )}
        </Formik>
        <S.RegisterLink>
          <Link href="signup">Don't have an account? Register!</Link>
        </S.RegisterLink>
      </ShadowBlock>
    </S.Login>
  );
};

export default connect((state) => state, userAction)(Login);
