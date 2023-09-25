import React, { useState, useEffect } from 'react';

const Body = () => {
    async function handleClick (muscle) {
        const data = await fetch(`/api/${muscle}`)
        const res = await data.json();
        console.log(res)
    }

    return (
        <div>
            <button onClick = {() => handleClick("bicep")}> Biceps </button>
            <button onClick = {() => handleClick("tricep")}> Tricep </button>
            <button onClick = {() => handleClick("chest")}> Chest </button>
            <button onClick = {() => handleClick("glutes")}> Glutes  </button>
        </div>
    );
};

export default Body;