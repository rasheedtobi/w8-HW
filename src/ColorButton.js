
import React from 'react';
import withToggle from './withToggle'; // Correct the import statement

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

export default withToggle(ColorButton); // Correct the function name in the export statement
