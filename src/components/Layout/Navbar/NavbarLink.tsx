import styled from "styled-components";
import { userService } from "../../../services";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

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

const handleLogout = async () => {
  await userService.logout();
};

export function NavbarLink() {
  const token = useSelector((state: RootState) => state.token);

  return !token ? (
    <StyledNavbarLink href="/login">
      <i className="fa fa-user-circle" style={{ textDecoration: "none" }}></i>
      <StyledNavbarText>Sign In</StyledNavbarText>
    </StyledNavbarLink>
  ) : (
    <StyledNavbarLink href="/" onClick={handleLogout}>
      <i className="fa fa-user-circle" style={{ textDecoration: "none" }}></i>
      <StyledNavbarText>Logout</StyledNavbarText>
    </StyledNavbarLink>
  );
}
