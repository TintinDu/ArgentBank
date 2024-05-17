import { BasicMain } from "../../layout/Layout";
import styled from "styled-components";
import { store } from "../../redux/store";
import { useEffect, useState } from "react";
import { userService } from "../../services";

const ProfileHeader = styled.header`
  color: #fff;
  margin-bottom: 2rem;
`;

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const SrOnly = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const AccountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
`;

const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

export function Profile() {
  const { token } = store.getState();

  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await userService.getUserData(token);

      if (!data) {
        throw new Error("No data found");
      }

      setUserData(data);
    };

    fetchData();
  }, [token]);
  console.log(userData);
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
    "Loading..."
  );
}
