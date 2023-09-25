import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    backgroundColor: '#F7F3E3',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalData = (props) => {
    const { muscleName, data } = props;

    // useEffect(() => {
    //     console.log("MUSCLE INFO IN MODAL DATA", data);
    // }, [data])

    return (
        <Box sx={style}>
            <h1>{muscleName}</h1>
            {data.map((muscle) => {
                return (
                    <>
                    <h2>{muscle.exercise_name}</h2>
                    <h2>{muscle.description}</h2>
                    </>
                )                
            })}
        </Box>
    )
};

export default ModalData;
