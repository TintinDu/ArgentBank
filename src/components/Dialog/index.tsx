import { useState } from "react";
import { userService } from "../../services";
import {
  ButtonWrapper,
  CancelButton,
  DialogContent,
  DialogInput,
  DialogWrapper,
  SubmitButton,
} from "./style";

export const Dialog = ({
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

  return isOpen ? (
    <DialogWrapper>
      <form onSubmit={handleEditName}>
        <DialogContent onSubmit={handleEditName}>
          <h2>Edit Name</h2>
          <DialogInput
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <DialogInput
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <ButtonWrapper>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <SubmitButton type="submit">Save</SubmitButton>
          </ButtonWrapper>
        </DialogContent>
      </form>
    </DialogWrapper>
  ) : null;
};
