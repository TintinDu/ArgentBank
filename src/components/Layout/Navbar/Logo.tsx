import argentBankLogo from "/argentBankLogo.png";
import styled from "styled-components";

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
`;

const StyledLogoImg = styled.img`
  max-width: 100%;
  width: 200px;
`;

const SrOnly = styled.h1`
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

export function Logo() {
  return (
    <StyledLogo href="/">
      <StyledLogoImg src={argentBankLogo} alt="Argent Bank Logo" />
      <SrOnly>Argent Bank</SrOnly>
    </StyledLogo>
  );
}
