import { userService } from "../../services";
import { DialogContent, DialogWrapper } from "./style";

const handleEditName = async () => {
  await userService.updateUserData({ firstName: "Tony", lastName: "Stark" });
};

export const Dialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return isOpen ? (
    <DialogWrapper>
      <DialogContent>
        <h2>Edit Name</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <button type="submit" onClick={handleEditName}>
          Save
        </button>
        <button onClick={onClose}>Cancel</button>
      </DialogContent>
    </DialogWrapper>
  ) : null;
};
