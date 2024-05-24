import { useState } from "react";
import { userService } from "../../services";
import {
  ButtonWrapper,
  CancelButton,
  FormContent,
  FormInput,
  InputWrapper,
  SubmitButton,
} from "./style";
import { store } from "../../redux/store";

export const EditNameForm = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: (event: React.FormEvent) => void;
  onSubmit: (firstName: string, lastName: string) => void;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEditName = async (event: React.FormEvent) => {
    event.preventDefault();
    await userService.updateUserData({ firstName, lastName });
    onClose(event);
    onSubmit(firstName, lastName);
  };

  const userInfos = store.getState().userInfos;

  return isOpen ? (
    <FormContent onSubmit={handleEditName}>
      <InputWrapper>
        <FormInput
          type="text"
          placeholder={userInfos?.firstName || "First Name"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder={userInfos?.lastName || "Last Name"}
          onChange={(e) => setLastName(e.target.value)}
        />
      </InputWrapper>
      <ButtonWrapper>
        <SubmitButton type="submit">Save</SubmitButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ButtonWrapper>
    </FormContent>
  ) : null;
};
