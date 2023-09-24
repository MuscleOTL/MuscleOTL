import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

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

function Home(){
    const[bodyTest, changeBody] = useState('TOUCH MY BODY')
    // const title = 'MUSCLEOTL';
    // const navigate = useNavigate();


    return (
    <div style = {flexer} >
        <h1 style={{color: 'purple'}}>MUSCLEOTL</h1>
        <button id ='body' style = {buttonStyles} onClick={()=>navigate('/body')}>{bodyTest}</button>
    </div>
    
    );
}


export {Home}