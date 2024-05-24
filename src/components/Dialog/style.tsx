import styled from "styled-components";

export const DialogWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DialogInput = styled.input`
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
  border: none;
  background-color: #007bff;
  color: white;
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
