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
  return userData ? (
    <BasicMain>
      <ProfileHeader>
        <h1>
          Welcome back
          <br />
          {userData.firstName} {userData.lastName}
        </h1>
        <EditButton>Edit Name</EditButton>
        <SrOnly>Accounts</SrOnly>
      </ProfileHeader>
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
