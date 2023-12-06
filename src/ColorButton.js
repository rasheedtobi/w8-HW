
import React from 'react';
import withColor from './withColor'; 
// Pure Component
const ColorButton = ({ isOn, toggle }) => {
  const handleClick = () => {
    toggle();
    document.body.style.backgroundColor = isOn ? 'white' : 'black';
  };

  return (
    <button onClick={handleClick}>
      ChangeColor
    </button>
  )
}

export default withColor(ColorButton); 
