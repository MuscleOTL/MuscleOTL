import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    color: '#ffff',
    backgroundColor: 'rgba(0,0,0,0.8)',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '50px',
    p: 4,

    boxShadow: '1px 2px 9px red',
};

const titleStyle = {
    textTransform: 'uppercase',
    paddingBottom: '2rem'
};

const exerciseTitle = {
    textTransform: 'capitalize',
    paddingBottom: '1rem'
}

const descriptionStyle = {
    fontSize: '1.5rem',
    paddingBottom: '2.8rem',
    fontWeight: '500'
}

const ModalData = (props) => {
    const { muscleName, data } = props;

    // useEffect(() => {
    //     console.log("MUSCLE INFO IN MODAL DATA", data);
    // }, [data])

    return (
        <Box sx={style}>
            <h1 style={titleStyle}>{muscleName}</h1>
            {data.map((muscle) => {
                return (
                    <>
                    <h2 style={exerciseTitle}>{muscle.exercise_name}:</h2>
                    <h2 style={descriptionStyle}>{muscle.description}</h2>
                    </>
                )                
            })}
        </Box>
    )
};

export default ModalData;
