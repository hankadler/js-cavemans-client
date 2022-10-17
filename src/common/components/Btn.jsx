import PropTypes from "prop-types";

const propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  id: "",
  className: ""
};

export default function Btn({ onClick, children, id, className }) {
  return (
    <button id={id} className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;
