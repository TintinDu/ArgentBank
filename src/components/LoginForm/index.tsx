import { useState } from "react";
import { userService } from "../../services";
import { useNavigate } from "react-router-dom";
import {
  CustomLabel,
  InputRemember,
  InputWrapper,
  SignInButton,
  StyledForm,
} from "./style";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = await userService.login({
      email,
      password,
      rememberMe,
    });

    if (!token) {
      return;
    }

    await userService.getUserData(token);

    navigate("/profile");
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <StyledForm onSubmit={handleLogin} method="POST">
      <InputWrapper>
        <label>Username</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        <label>Password</label>
        <input
          type="password"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <InputRemember>
        <input
          type="checkbox"
          checked={rememberMe}
          onClick={handleRememberMe}
        />
        <CustomLabel />
        Remember me
      </InputRemember>
      <SignInButton type="submit" value="Submit">
        Sign In
      </SignInButton>
    </StyledForm>
  );
}
