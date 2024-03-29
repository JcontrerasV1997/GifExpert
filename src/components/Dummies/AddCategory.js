import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( inputValue.trim()) {
      inputValue && setCategories( (category) => [ inputValue,...category] );
        setinputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
