import styled from "@emotion/styled";
import Btn from "./Btn";

const NavBtn = styled(Btn)`
  border: none;
  font-family: Antropos, sans-serif;
  font-size: 1.125em;
  font-weight: ${({ id, activeNav }) => (
    id === activeNav ? "bold" : "normal"
  )};
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ id, activeNav }) => (
    id === activeNav ? "gold" : ""
  )};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default NavBtn;
