import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  label {
    font-weight: bold;
  }
  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const InputRemember = styled.div`
  display: flex;
`;

const CustomLabel = styled.label`
  margin-left: 0.25rem;
`;

const SignInButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  text-decoration: underline;
`;

export function Form() {
  return (
    <form>
      <InputWrapper>
        <label>Username</label>
        <input type="text" />
      </InputWrapper>
      <InputWrapper>
        <label>Password</label>
        <input type="text" />
      </InputWrapper>
      <InputRemember>
        <input type="checkbox" />
        <CustomLabel />
        Remember me
      </InputRemember>
      <SignInButton type="submit" value="Submit">
        Sign In
      </SignInButton>
    </form>
  );
}
