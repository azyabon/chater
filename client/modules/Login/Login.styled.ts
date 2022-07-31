import styled from "@emotion/styled";

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;
export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    opacity: 0.4;
    font-weight: lighter;
    letter-spacing: 0.13px;
  }
`;
export const LoginForm = styled.form``;

export const RegisterLink = styled.a`
  cursor: pointer;
  opacity: 0.5;
  text-align: center;
  margin-top: 1rem;
  letter-spacing: 0.2px;
  transition: all 0s ease;
  &:hover {
    color: #008cff;
  }
`;
export const Error = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  color: red;
`;
