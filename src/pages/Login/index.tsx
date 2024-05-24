import styled from "styled-components";
import { LoginForm } from "../../components/LoginForm";
import { BasicMain } from "../../layout";

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

export function Login() {
  return (
    <BasicMain>
      <SignInContent>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h2>Sign In</h2>
        <LoginForm />
      </SignInContent>
    </BasicMain>
  );
}
