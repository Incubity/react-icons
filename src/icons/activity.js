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
      {...otherProps}
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill={color} fill-rule="nonzero">
            <polygon points="15 19 9 1 5.63962039 11.0811388 2 11.0811388 2 12.0811388 6.36037961 12.0811388 9 4.16227766 15 22.1622777 18.3603796 12.0811388 22 12.0811388 22 11.0811388 17.6396204 11.0811388"></polygon>
        </g>
    </g>
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
