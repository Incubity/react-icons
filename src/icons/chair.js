import React from 'react';
import PropTypes from 'prop-types';

const Chair = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M7,19 L8,19 L8,22 L7,22 L7,19 Z M16,19 L17,19 L17,22 L16,22 L16,19 Z M19,10 L22,10 L22,15 C22,17.209139 20.209139,19 18,19 L6,19 C3.790861,19 2,17.209139 2,15 L2,10 L5,10 L5,9 C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675 19,9 L19,10 Z M5,11 L3,11 L3,15 C3,16.6568542 4.34314575,18 6,18 L18,18 C19.6568542,18 21,16.6568542 21,15 L21,11 L19,11 L19,14 L5,14 L5,11 Z M6,9 L6,13 L18,13 L18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 Z"
        id="path-1"
      />
    </svg>
  );
};

Chair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Chair.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Chair;
