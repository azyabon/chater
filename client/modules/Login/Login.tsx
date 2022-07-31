import * as S from "./Login.styled";
import Button from "../../components/Button";
import ShadowBlock from "../../components/ShadowBlock";
import Input from "../../components/Input";
import Link from "next/link";
import { FC } from "react";
import { Formik } from "formik";
import * as yup from "yup";

const regPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g;

const Login: FC = () => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("This field is required")
      .min(4, "Minimum 4 characters"),
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
            username: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
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
                id={"username"}
                placeholder={"Username"}
                type={"text"}
                name={"username"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {touched.username && errors.username && (
                <S.Error>{errors.username}</S.Error>
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
          <Link href={"signup"}>Don't have an account? Register!</Link>
        </S.RegisterLink>
      </ShadowBlock>
    </S.Login>
  );
};

export default Login;
