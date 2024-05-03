import styled from "styled-components";

const StyledNavbarLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const StyledNavbarIcon = styled.i`
  padding-right: 10px;
`;

export function NavbarLink() {
  return (
    <StyledNavbarLink href="/login">
      <StyledNavbarIcon className="fa fa-user-circle"></StyledNavbarIcon>
      <p>Sign In</p>
    </StyledNavbarLink>
  );
}
