import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './Filter.module.css'
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function Filter() {


  return (
    <div className={styles.box}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<OutlinedInput />}
          className={styles.select}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


      <Button variant="contained" color="primary">
        Hello, Material-UI!
      </Button> */}



    </div>
  );
}

export default Filter