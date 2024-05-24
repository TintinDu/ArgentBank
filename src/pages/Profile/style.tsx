import styled from "styled-components";

export const ProfileHeader = styled.header`
  color: #fff;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

export const SrOnly = styled.h2`
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

export const AccountSection = styled.section`
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
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

export const AccountContentWrapperCta = styled.div`
  width: 100%;
  flex: 1;
  @media (min-width: 720px) {
    flex: 0;
  }
`;

export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountAmountDescription = styled.p`
  margin: 0;
`;

export const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`;
