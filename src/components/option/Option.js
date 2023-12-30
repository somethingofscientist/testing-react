
import {
    Box,
    MenuItem,
    InputLabel,
    FormControlLabel,
    Select,
    TextField,
    FormControl, makeStyles
} from '@material-ui/core';
import { useState } from 'react';
import styles from './Option.module.css'


const useStyles = makeStyles((theme) => ({
    select: {
        backgroundColor: 'black',
        color: 'white',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Default border color
        },
        '&:focus': {
            backgroundColor: 'olive',
            border: 'none',
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'darkBlue', // Change the border color on focus
            },
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'darkGreen',
        },
    },
    label: {
        color: 'white',
        '&.Mui-focused': {
            color: 'red', // Change the focused label color
        },
    },
    option: {
        backgroundColor: 'aqua',

        '&:focus': {
            backgroundColor: 'aqua',
        },
        '&:hover': {
            backgroundColor: 'green',
            color: 'white',
        },
    },
}));

const Option = () => {
    const classes = useStyles();

    const [age, setAge] = useState('');
    const handleChange = (e) => {
        setAge(e.target.value);
    };

    return (

        <div className={styles.container}>
            <FormControl variant="outlined" fullWidth>
                <InputLabel
                    className={classes.label}
                    id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    className={`${classes.select}`}
                >
                    <MenuItem value={12} className={`${classes.option}`}>
                        Ten
                    </MenuItem>
                    <MenuItem value={11} className={`${classes.option}`}>
                        Ten
                    </MenuItem>
                    <MenuItem value={19} className={`${classes.option}`}>
                        Ten
                    </MenuItem>
                    <MenuItem value={15} className={`${classes.option}`}>
                        Ten
                    </MenuItem>
                    <MenuItem value={18} className={`${classes.option}`}>
                        Ten
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Option;  