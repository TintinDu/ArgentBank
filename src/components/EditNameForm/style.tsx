import styled from "styled-components";

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FormInput = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

export const CancelButton = styled(Button)`
  background-color: #fffff;
  border: 1px solid #ccc;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
