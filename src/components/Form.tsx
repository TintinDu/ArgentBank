import { useState } from "react";
import styled from "styled-components";
import { userService } from "../services";
import { useNavigate } from "react-router-dom";

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
  border: none;
`;

const StyledForm = styled.form`
  box-sizing: border-box;
  background-color: white;
  margin: 0 auto;
  text-align: center;
`;

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await userService.login({
      email,
      password,
    });

    navigate("/profile");
  };

  return (
    <StyledForm onSubmit={handleLogin} method="POST">
      <InputWrapper>
        <label>Username</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        <label>Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </InputWrapper>
      <InputRemember>
        <input type="checkbox" />
        <CustomLabel />
        Remember me
      </InputRemember>
      <SignInButton type="submit" value="Submit">
        Sign In
      </SignInButton>
    </StyledForm>
  );
}
