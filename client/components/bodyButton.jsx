import React, {useState, useEffect} from 'react';

const bodyButton = () => {

    async function handleClick () {
        
        fetch("http://localhost:3000/api/biceps", {
            method: "GET" })
            .then(response => response.json())
            .then(response => console.log(response));
    }

    return (
        <div>
            <button onClick = {handleClick}> Biceps </button>
        </div>
    );
};

// const bodyParts = () => {

//     return(

//     );
// }



export default bodyButton;
