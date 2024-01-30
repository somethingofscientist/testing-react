import React, { useState } from 'react'
import styles from './CheckBox.module.css';

const CheckBox = () => {
    return (

        <div className={styles.my_container}>
            <input
                type="checkbox"
            />
            <button>
                Basic
            </button>

            <input
                className={styles.my_checkbox}
                type="checkbox"
            />
            <button>
                Submit
            </button>
        </div>

    );
};

export default CheckBox