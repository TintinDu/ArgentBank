import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
`;

export function Login() {
  return (
    <StyledForm method="post">
      Username
      <input type="text" />
      Password
      <input type="text" />
      <StyledLabel>
        <input type="checkbox" />
        Remember me
      </StyledLabel>
      <button type="submit" value="Submit">
        Sign In
      </button>
    </StyledForm>
  );
}
