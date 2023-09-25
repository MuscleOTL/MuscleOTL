import React, {useState, useEffect} from 'react';
import Modal from './Modal.jsx'

const Body = () => {

    function handleClick (muscle) {
        
        console.log("1");

        fetch(`/api/${muscle}`)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch( (err) => { console.log("Error here") } );
    }

    return (
        <div className = 'btn-container'>
            <button onClick = {() => handleClick('bicep')}> Biceps </button>
            <button onClick = {() => handleClick('tricep')}> Tricep </button>
            <button onClick = {() => handleClick('chest')}> Chest </button>
            <button onClick = {() => handleClick('glutes')}> Glutes </button>
        </div>
    );
};


export default Body;
