import PropTypes from "prop-types";
import styled from "@emotion/styled";

const propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
};

export default function SlidePag({ index, setIndex, length }) {
  return (
    <SlidePagDiv>
      {[...Array(length).keys()].map((i) => (
        <Btn className="icon" key={i} activeIndex={index} value={i} onClick={() => setIndex(i)} />
      ))}
    </SlidePagDiv>
  );
}

SlidePag.propTypes = propTypes;

const SlidePagDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: .75em;
  align-content: end;
  justify-content: center;
  width: 67vw;
  height: 37.6875vw; // maintains 16:9 ratio

  @media (max-width: 576px) {
    width: 100%;
    height: calc(100vw * (9 / 16)); // maintains 16:9 ratio
  } 
`;

const Btn = styled.button`
  margin-bottom: 1em;
  border: 1px solid rgba(255,255,255,.9);
  border-radius: 100%;
  width: 1.5em;
  height: 1.5em;
  background-color: ${({ value, activeIndex }) => (
    activeIndex === value ? "var(--fg)" : "transparent"
  )};
`;
