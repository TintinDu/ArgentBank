import styled from "styled-components";
import { Form } from "../../components/Form";

const SignInMain = styled.main`
  background-color: #12002b;
  flex: 1;
`;

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
    <SignInMain>
      <SignInContent>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h2>Sign In</h2>
        <Form />
      </SignInContent>
    </SignInMain>
  );
}
