import React from 'react';
import PropTypes from 'prop-types';

const Activity = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      {...otherProps}
    >
      <polyline points="2 13 6 13 9 3 15 22 18 13 22 13" />
    </svg>
  );
};

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Activity.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Activity;
