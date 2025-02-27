import React, { useState } from 'react';

// Higher Order

const withColor = (WrappedComponent) => {
const WithColor = (props) => {
const [isOn, setIsOn] = useState(false);
const toggle = () => {
setIsOn((prevIsOn) => !prevIsOn);
};
return <WrappedComponent isOn={isOn} toggle={toggle} {...props} />;
};
return WithColor;
};

export default withColor; 
