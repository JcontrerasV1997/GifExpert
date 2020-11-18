import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setinputValue] = useState(['One Punch']);

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( inputValue.trim().length > 2) {
      inputValue && setCategories( (category) => [ inputValue,...category,] );
        setinputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
