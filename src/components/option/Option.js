import { Box, FormControl, InputLabel, MenuItem, Select, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { FaRegHandPointDown } from "react-icons/fa";
import styles from './Option.module.css'



const useStyles = makeStyles((theme) => ({
    select: {
        color: 'white',
        outline: 'none',
        borderRadius: '8px',
        backgroundColor: `var(--dark_header)`,
        '& .MuiOutlinedInput-notchedOutline': {
            border: "0.1px solid white",
            outline: 'none',
        },
        '&:focus': {
            backgroundColor: `var(--dark_green)`,
            color: 'white',
            border: 'none',
            outline: 'none',
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                outline: 'none',
            },
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            backgroundColor: `var(--dark_green)`,
            color: 'white',
            border: 'none',
        },
    },
    label: {
        fontSize: "18px",
        paddingLeft: "10px",
        color: `var(--pale_white)`,
        '&.Mui-focused': {
            color: 'white',
        },
    },
    option: {
        backgroundColor: `var(--green)`,
        color: 'white',
        margin: '-8px 0',
        padding: '16px 18px',
        width: '100%',
        fontSize: '18px',
        '&:focus': {
            backgroundColor: `var(--dark_green)`,
            color: 'white',
            outline: 'none',
        },
        '&:hover': {
            backgroundColor: `var(--dark_green)`,
            color: 'white',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            outline: 'none',
        },
    },
    selectedOption: {
        fontSize: '18px',
        paddingLeft: "10px",
        border: 'none',
        outline: 'none',
    },
    arrowIcon: {
        fill: `var(--pale_white)`,
        fontSize: '30px',
        marginRight: '24px',
        background: 'transparent',
    },
    filled: {
        color: 'white',
        backgroundColor: 'var(--dark_green)',
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            outline: 'none',
        },
    },
}));
const Option = () => {
    const classes = useStyles();
    const [age, setAge] = useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const NewIcon = () => {
        <span>
            <FaRegHandPointDown
                size="50px"
                color="red" />
        </span>
    }

    return (
        <div className={styles.container}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl variant='outlined' fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        IconComponent={NewIcon}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                            },
                            getContentAnchorEl: null,
                            autoWidth: false,
                        }}
                        MenuListProps={{
                            autoFocus: true,
                        }}
                    >
                        <MenuItem className={`${classes.option}`} value={10}>Ten</MenuItem>
                        <MenuItem className={`${classes.option}`} value={20}>Twenty</MenuItem>
                        <MenuItem className={`${classes.option}`} value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default Option