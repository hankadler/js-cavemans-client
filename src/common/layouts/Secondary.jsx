import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import NavBtn from "../components/NavBtn";

const navItems = ["foods", "sides", "sauces", "drinks", "desserts"]; // todo: extract to constants

export default function Secondary() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(navItems[0]);

  const navTo = async ({ target: { id } }) => {
    setActiveNav(id);
    navigate(id);
  };

  return (
    <SecondaryDiv>
      <Nav>
        {navItems.map((navItem, i) => (
          <NavBtn className="navbtn" key={i} id={navItem} activeNav={activeNav} onClick={navTo}>
            {navItem}
          </NavBtn>
        ))}
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </SecondaryDiv>
  );
}

const SecondaryDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
  margin: -.25em;
  height: 100%;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-gap: .5em;
  align-content: start;
  border-radius: .5em;
  background-color: var(--bg-opac-50);
  
  @media (max-width: 576px) {
    grid-auto-flow: column;
    margin-bottom: 1em;
  }
`;

const Main = styled.main`
  & * {
    min-width: fit-content;
    max-width: calc(var(--max-width-container) * (4/5));
  }
`;
