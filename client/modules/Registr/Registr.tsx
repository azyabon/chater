import * as S from "./Registr.styled";
import Button from "../../components/Button";
import ShadowBlock from "../../components/ShadowBlock";
import Input from "../../components/Input";
import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import * as yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import { userAction } from "../../store/actions";

const regPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g;
const regEmail =
  /([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+/g;

type Props = {
  fetchUserRegister?: any;
};

const Registr: FC<Props> = ({ fetchUserRegister }) => {
  const [success, setSuccess] = useState(false);
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("This field is required")
      .matches(regEmail, "Неправильный email"),
    username: yup
      .string()
      .required("This field is required")
      .min(4, "Minimum 4 characters"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Minimum 8 characters")
      .matches(regPass, "Пароль должен содержать хотя бы 1 число; a-z; A-Z"),
    confirmPassword: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("password")], "Passwords don't match")
      .matches(regPass, "Пароль должен содержать хотя бы 1 число; a-z; A-Z"),
  });

  return (
    <S.Registr>
      <ShadowBlock>
        {success ? (
          <S.Confirm>
            <Image src={"/info.png"} width={40} height={40} />
            <h2>Verify your account</h2>
            <p>An email has been sent to your email to verify your account</p>
            <S.LoginLink
              style={{
                opacity: 1,
                fontSize: "1.5rem",
                textDecoration: "underline",
              }}
            >
              <Link href={"/signin"}>Go to login!</Link>
            </S.LoginLink>
          </S.Confirm>
        ) : (
          <>
            <S.RegistrTitle>
              <h2>SignUp</h2>
              <p>To enter the chat you need to register</p>
            </S.RegistrTitle>
            <Formik
              initialValues={{
                email: "",
                username: "",
                password: "",
                confirmPassword: "",
              }}
              validateOnBlur
              onSubmit={({ email, password, username }) => {
                const postData: any = {
                  email,
                  password,
                  fullName: username,
                };
                fetchUserRegister(postData).then((res: any) => {
                  if (!res.data.code) {
                    setSuccess(true);
                  } else {
                    alert("Пользователь с таким email уже существует!");
                  }
                });
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
                <S.RegistrForm>
                  <Input
                    id={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    name={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <S.Error>{errors.email}</S.Error>
                  )}
                  <Input
                    id={"username"}
                    placeholder={"Username"}
                    type={"username"}
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
                  <Input
                    id={"confirmPassword"}
                    placeholder={"Confirm password"}
                    type={"password"}
                    name={"confirmPassword"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <S.Error>{errors.confirmPassword}</S.Error>
                  )}
                  <Button
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    style={{ width: "100%", textTransform: "uppercase" }}
                    type={"submit"}
                  >
                    Sign In
                  </Button>
                </S.RegistrForm>
              )}
            </Formik>
            <S.LoginLink>
              <Link href="signin">Enter in your account</Link>
            </S.LoginLink>
          </>
        )}
      </ShadowBlock>
    </S.Registr>
  );
};

export default connect((state) => state, userAction)(Registr);
