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
  &:hover {
    text-decoration: underline;
  }
`;

export function NavbarLink() {
  return (
    <StyledNavbarLink href="/login">
      <i className="fa fa-user-circle" style={{ textDecoration: "none" }}></i>
      <StyledNavbarText>Sign In</StyledNavbarText>
    </StyledNavbarLink>
  );
}
