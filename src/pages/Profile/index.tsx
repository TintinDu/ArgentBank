import { BasicMain } from "../../layout";
import { store } from "../../redux/store";
import { useEffect, useState } from "react";
import { UserData, userService } from "../../services";
import {
  AccountAmount,
  AccountAmountDescription,
  AccountContentWrapper,
  AccountSection,
  AccountTitle,
  EditButton,
  ProfileHeader,
  SrOnly,
  TransactionButton,
} from "./style";
import { Dialog } from "../../components/Dialog";

export function Profile() {
  const { token } = store.getState();

  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        throw new Error("No token found");
      }
      const data = await userService.getUserData(token);

      if (!data) {
        throw new Error("No data found");
      }

      setUserData(data);
    };

    fetchData();
  }, [token]);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = (event: React.FormEvent) => {
    event.preventDefault();
    setDialogOpen(false);
  };

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleNameChange = (firstName: string, lastName: string) => {
    setUserData((prevState: UserData | null) => ({
      ...prevState!,
      firstName,
      lastName,
    }));
  };

  return userData ? (
    <BasicMain>
      <ProfileHeader>
        <h1>
          Welcome back
          <br />
          {userData.firstName} {userData.lastName}
        </h1>
        <EditButton onClick={handleClickOpen}>Edit Name</EditButton>
        <SrOnly>Accounts</SrOnly>
      </ProfileHeader>
      <Dialog
        isOpen={dialogOpen}
        onClose={(event) => handleClose(event)}
        onSubmit={handleNameChange}
      />
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Current Balance</AccountTitle>
          <AccountAmount>$2,000.00</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapper>
          <TransactionButton>View Transactions</TransactionButton>
        </AccountContentWrapper>
      </AccountSection>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Current Balance</AccountTitle>
          <AccountAmount>$2,000.00</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapper>
          <TransactionButton>View Transactions</TransactionButton>
        </AccountContentWrapper>
      </AccountSection>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Current Balance</AccountTitle>
          <AccountAmount>$2,000.00</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapper>
          <TransactionButton>View Transactions</TransactionButton>
        </AccountContentWrapper>
      </AccountSection>
    </BasicMain>
  ) : (
    <h1>Loading...</h1>
  );
}
