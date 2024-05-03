import argentBankLogo from "/argentBankLogo.png";
import styled from "styled-components";

const StyledLogo = styled.img`
  max-width: 100%;
  width: 200px;
`;

export function Logo() {
  return <StyledLogo src={argentBankLogo} alt="Argent Bank Logo" />;
}
