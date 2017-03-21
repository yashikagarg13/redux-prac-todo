import React, {PropTypes} from "react";

const Link = ({
  active,
  onClick,
  children
}) => {
  return active
    ? <span>{children}</span>
    : <a href= "#"
        onClick={e => {
          e.preventDefault();
          onClick();
        }
      }>
        {children}
    </a>
};


Link.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;