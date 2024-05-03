import styled from "styled-components";
import { Logo } from "./Logo";
import { NavbarLink } from "./NavbarLink";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

export function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <NavbarLink />
    </StyledNavbar>
  );
}
