import React, { useEffect, useState } from 'react';

const Reload = () => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log('After 10 seconds...');
        }, 1000);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <div>
            <input type="file" />
        </div>
    )
};

export default Reload;
