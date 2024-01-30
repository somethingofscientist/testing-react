import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './Filter.module.css';

function Filter() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder='Enter Name'
          value={inputValue}
          onChange={handleChange}
          className={inputValue.length > 0 ? styles.inputWithText : styles.inputWithoutText}
        />
      </div>
    </>
  );
}

export default Filter;
