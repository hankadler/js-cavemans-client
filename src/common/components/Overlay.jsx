import PropTypes from "prop-types";
import styled from "@emotion/styled";

const propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

const defaultProps = {
  width: "100%",
  height: "100%"
};

export default function Overlay({ children, width, height }) {
  return (
    <OverlayDiv width={width} height={height}>
      {children}
    </OverlayDiv>
  );
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

const OverlayDiv = styled.div`
  position: relative;
  z-index: 0;
  display: grid;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
 
  & div {
    position: absolute;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }
  
  & > * {
    display: grid;
    justify-self: center;
  }
`;
