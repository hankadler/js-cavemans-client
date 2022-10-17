import PropTypes from "prop-types";
import styled from "@emotion/styled";

const propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.string,
  gap: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  justifyItems: PropTypes.string,
  style: PropTypes.instanceOf(Object)
};

const defaultProps = {
  cols: "auto",
  gap: "0",
  alignContent: "stretch",
  alignItems: "normal",
  justifyContent: "normal",
  justifyItems: "stretch",
  style: null
};

export default function Row({
  children, cols, gap, alignContent, alignItems, justifyContent, justifyItems, style
}) {
  const This = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: ${cols};
    grid-gap: ${gap};
    align-content: ${alignContent};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    justify-items: ${justifyItems};
  `;

  return <This style={style}>{children}</This>;
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
