import styled from "styled-components";
import { Form } from "../../components/Form";
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
        <Form />
      </SignInContent>
    </BasicMain>
  );
}