import React, {useState, useEffect} from 'react';

const BodyButton = () => {

    function handleClick () {
        
        console.log("1");

        fetch("/api/bicep")
            .then(response => response.json())
            .then(response => console.log(response))
            .catch( (err) => { console.log("Error here") } );
    }

    return (
        <div>
            <button onClick = {handleClick}> Biceps </button>
        </div>
    );
};


export default BodyButton;
