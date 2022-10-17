import PropTypes from "prop-types";
import styled from "@emotion/styled";

const propTypes = {
  children: PropTypes.node.isRequired,
  rows: PropTypes.string,
  gap: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  justifyItems: PropTypes.string,
  style: PropTypes.instanceOf(Object)
};

const defaultProps = {
  rows: "auto",
  gap: "0",
  alignContent: "stretch",
  alignItems: "normal",
  justifyContent: "normal",
  justifyItems: "stretch",
  style: null
};

export default function Col({
  children, rows, gap, alignContent, alignItems, justifyContent, justifyItems, style
}) {
  const This = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: ${rows};
    grid-gap: ${gap};
    align-content: ${alignContent};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    justify-items: ${justifyItems};
  `;

  return <This style={style}>{children}</This>;
}

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
