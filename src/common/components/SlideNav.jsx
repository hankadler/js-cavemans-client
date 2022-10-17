import PropTypes from "prop-types";
import styled from "@emotion/styled";
import prevIcon from "../assets/icons/prev-64x64.png";
import nextIcon from "../assets/icons/next-64x64.png";

const propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default function SlideNav({ onPrev, onNext }) {
  return (
    <SlideNavDiv>
      <img className="icon" src={prevIcon} alt="prev" onClick={onPrev} />
      <img className="icon" src={nextIcon} alt="next" onClick={onNext} />
    </SlideNavDiv>
  );
}

SlideNav.propTypes = propTypes;

const SlideNavDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-content: space-around;
  justify-content: space-between;
  width: 67vw;
  height: 37.6875vw; // maintains 16:9 ratio

  @media (max-width: 576px) {
    width: 100%;
    height: calc(100vw * (9 / 16)); // maintains 16:9 ratio
  } 

  & > img {
    margin: 0;
    border-radius: 100%;
    padding: .5em;
    width: calc(3vh + 3vw);
    height: calc(3vh + 3vw);
  }
  
  & > *:hover {
    background-color: var(--bg-opac-75);
  }
`;
