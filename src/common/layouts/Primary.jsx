import { useNavigate, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import state from "../state";
import Row from "./Row";
import NavBtn from "../components/NavBtn";
import loginIcon from "../assets/icons/login-32x32.png";
import logoutIcon from "../assets/icons/logout-32x32.png";
import images from "../assets/images";

const navItems = ["home", "menu", "locate", "about"]; // todo: extract to constants...

const LOGOUT = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;

export default function Primary() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useRecoilState(state.activeNav);
  const [user, setUser] = useRecoilState(state.user);
  const [background, setBackground] = useState("black");
  const [logout] = useMutation(LOGOUT);

  useEffect(() => setBackground(images.backgrounds[activeNav]), [activeNav]);

  const navTo = async ({ target: { id } }) => {
    setActiveNav(id);
    navigate(id);
  };

  const handleLogout = async () => {
    const { data } = await logout();
    console.log(data.logout.message);
    if (data.logout.message) setUser("");
    navigate("home");
  };

  return (
    <PrimaryDiv background={background}>
      <header>
        <Row cols="auto" gap=".5em" alignItems="center" justifyContent="right">
          <pre>{user}</pre>
          <img
            id="portal"
            className="icon"
            src={user ? logoutIcon : loginIcon}
            alt="portal"
            onClick={user ? handleLogout : navTo}
          />
        </Row>
        <Row cols="repeat(auto-fill, 1fr)" justifyContent="stretch">
          {navItems.map((navItem, i) => (
            <NavBtn key={i} id={navItem} activeNav={activeNav} onClick={navTo}>
              {navItem}
            </NavBtn>
          ))}
        </Row>
      </header>
      <main>
        <Outlet />
      </main>
      {/*
        <footer>
          <p>Caveman&apos;s &copy; {new Date().getFullYear()}, All Rights Reserved</p>
        </footer>
      */}
    </PrimaryDiv>
  );
}

const PrimaryDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 2em;
  justify-content: space-around;
  background-size: cover;
  background: no-repeat ${({ background }) => background};
  height: 100vh;
  
  @media (max-width: 576px) {
    grid-gap: 0;
  }
 
  & > header, & > main, & > footer {
    display: grid;
    grid-gap: 1em;
    width: var(--max-width-container);
    
    @media (max-width: 576px) {
      width: 100%;
      transform: scale(.9);
    }
  }
  
  & > footer > p {
    font-family: Antropos, sans-serif;
    text-align: center;
  }
`;
