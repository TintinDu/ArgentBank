import styled from "styled-components";

const StyledNavbarLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #2c3e50;
  margin-right: 0.5rem;
`;

const StyledNavbarText = styled.p`
  margin-left: 0.3em;
`;

export function NavbarLink() {
  return (
    <StyledNavbarLink href="/login">
      <i className="fa fa-user-circle"></i>
      <StyledNavbarText>Sign In</StyledNavbarText>
    </StyledNavbarLink>
  );
}
