import styled from "styled-components";
import { userService } from "../../services";
import { useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
import { useNavigate } from "react-router-dom";

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

const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const handleLogout = async (navigate: (arg0: string) => void) => {
  await userService.logout();
  navigate("/");
};

export function NavbarLink() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.token);
  const { userInfos } = store.getState();

  return !token ? (
    <StyledNavbarLink onClick={() => navigate("/login")}>
      <i className="fa fa-user-circle" style={{ textDecoration: "none" }}></i>
      <StyledNavbarText>Sign In</StyledNavbarText>
    </StyledNavbarLink>
  ) : (
    <NavItemsWrapper>
      <StyledNavbarLink onClick={() => navigate("/profile")}>
        <i className="fa fa-user-circle" style={{ textDecoration: "none" }}></i>
        <StyledNavbarText>{userInfos?.firstName}</StyledNavbarText>
      </StyledNavbarLink>
      <StyledNavbarLink onClick={() => handleLogout(navigate)}>
        <i className="fa fa-sign-out" style={{ textDecoration: "none" }}></i>
        <StyledNavbarText>Sign Out</StyledNavbarText>
      </StyledNavbarLink>
    </NavItemsWrapper>
  );
}
