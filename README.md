## React Icons

#### Simply beautiful SVG icons as React components.
Designed on a 24x24 grid with an emphasis on functionality, consistency and simplicity.

### Usage

```javascript
import { Camera } from 'react-icons';

class MyClass extends React.Component {
  render() {
    return <Camera />
  }
}
````
If you can't use ES6 imports, it's possible to include icons from the compiled folder ./dist.
```javascript
var Camera = require('react-icons/dist/icons/camera').default;

var MyComponent = React.createClass({
  render: function () {
    return (
      <Camera />
    );
  }
});
```
You can also include the whole icon pack:

```javascript
import * as Icon from 'react-icons';

class MyClass extends React.Component {
  render() {
    return <Icon.Camera />
  }
}
```
Icons can be configured with inline props:
```javascript
<Icon.AlertCircle color="red" size={48} />
```

### Development

Install the dependencies
```sh
yarn install
```
To build the dist folder and make sure your icons are generated :
```sh
yarn run build
```

### Add a new icon

1. Export your svg in the folder ./src/svg-icons. Make sure to keep only the svg tag and the definition (defs)
```html
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M7,19 L8,19 L8,22 L7,22 L7,19 Z M16,19 L17,19 L17,22 L16,22 L16,19 Z M19,10 L22,10 L22,15 C22,17.209139 20.209139,19 18,19 L6,19 C3.790861,19 2,17.209139 2,15 L2,10 L5,10 L5,9 C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675 19,9 L19,10 Z M5,11 L3,11 L3,15 C3,16.6568542 4.34314575,18 6,18 L18,18 C19.6568542,18 21,16.6568542 21,15 L21,11 L19,11 L19,14 L5,14 L5,11 Z M6,9 L6,13 L18,13 L18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 Z" id="path-1"></path>
</svg>
```
2. Duplicate an icon file to create your own (the file must have the same name as the svg file)
3. Modify the name of the js class and copy paste your svg definition in the render
```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Chair = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
```
4. Follow the step of the Development section