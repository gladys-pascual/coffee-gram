import React from 'react';

const Dropdown = (props) => {
  return (
    <span className="dropdown">
      <h3>{props.heading}</h3>
      <select onChange={props.handleChoice} name="coffee-art" className="coffee-art">
        {
          props.options.map(optionItem => <option value={optionItem.value}> {optionItem.label}</option>)
        }
      </select>
    </span>
  );
}

export default Dropdown;