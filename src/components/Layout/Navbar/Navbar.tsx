import styled from "styled-components";
import { Logo } from "./Logo";
import { NavbarLink } from "./NavbarLink";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

export function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <NavbarLink />
    </StyledNavbar>
  );
}
