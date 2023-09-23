import React, {useState, useEffect} from 'react';


const buttonStyles = {
    backgroundColor: 'red',
    color: 'black',
}

const flexer = {
    border: '1px solid black', 
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'
}

function Body(){
    const[bodyTest, changeBody] = useState('TOUCH MY BODY')
    // const title = 'MUSCLEOTL';
    return (
    <div style = {flexer} >
        <h1 style={{color: 'purple'}}>MUSCLEOTL</h1>
        <button id ='body' style = {buttonStyles}>{bodyTest}</button>
    </div>
    
    );
}


export {Body}