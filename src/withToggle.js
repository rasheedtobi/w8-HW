
// import React from 'react';

import React, { useState } from 'react';
const withToggle = (WrappedComponent) => {
const WithToggle = (props) => {
const [isOn, setIsOn] = useState(false);
const toggle = () => {
setIsOn((prevIsOn) => !prevIsOn);
};
return <WrappedComponent isOn={isOn} toggle={toggle} {...props} />;
};
return WithToggle;
};

export default withToggle; 
