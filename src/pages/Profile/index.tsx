import { BasicMain } from "../../layout";
import { store } from "../../redux/store";
import { useEffect, useState } from "react";
import { UserData } from "../../services";
import {
  AccountAmount,
  AccountAmountDescription,
  AccountContentWrapper,
  AccountContentWrapperCta,
  AccountSection,
  AccountTitle,
  EditButton,
  ProfileHeader,
  SrOnly,
  TransactionButton,
} from "./style";
import { EditNameForm } from "../../components/EditNameForm";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { userInfos, token } = store.getState();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData | null>(userInfos);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClose = (event: React.FormEvent) => {
    event.preventDefault();
    setIsFormOpen(false);
  };

  const handleClickOpen = () => {
    setIsFormOpen(true);
  };

  const handleNameChange = (firstName: string, lastName: string) => {
    setUserData((prevState: UserData | null) => ({
      ...prevState!,
      firstName,
      lastName,
    }));
  };

  useEffect(() => {
    if (!userData || !token) {
      navigate("/login");
    }
  }, [token, userData, navigate]);

  return userData && token ? (
    <BasicMain>
      <ProfileHeader>
        {isFormOpen ? (
          <>
            <h1>Welcome back</h1>
            <EditNameForm
              isOpen={isFormOpen}
              onClose={(event) => handleClose(event)}
              onSubmit={handleNameChange}
            />
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {userData.firstName} {userData.lastName}!
            </h1>
            <EditButton onClick={handleClickOpen}>Edit Name</EditButton>
          </>
        )}
        <SrOnly>Accounts</SrOnly>
      </ProfileHeader>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <AccountAmount>$2,082.79</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapperCta>
      </AccountSection>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
          <AccountAmount>$10,928.42</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapperCta>
      </AccountSection>
      <AccountSection>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
          <AccountAmount>$184.30</AccountAmount>
          <AccountAmountDescription>Current Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapperCta>
      </AccountSection>
    </BasicMain>
  ) : (
    <h1>Loading</h1>
  );
}
