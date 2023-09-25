import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
<<<<<<< HEAD:client/components/bodyComponent.jsx
=======

>>>>>>> 11a5d7a0e907132da9075d643aafd1d857fba09b:client/components/Home.jsx

const buttonStyles = {
    backgroundColor: 'red',
    color: 'black',
}

const flexer = {
    backgroundImage: "url('https://thumbs.dreamstime.com/b/bodybuilding-male-muscle-anatomy-strong-muscular-man-silhouette-front-side-back-view-vector-illustration-infografic-scheme-246471950.jpg')",
    border: '1px solid black', 
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'
}

const title = {
        fontFamily: 'Comic Sans',
        fontSize: "4rem",
        fontWeight: 1.5,
        lineHeight: 1.5,
        color: "#292b2c",
        backgroundColor: "#fff",
        padding: "0 2em"
}

function Home(){
    const[bodyTest, changeBody] = useState('TOUCH MY BODY')
    // const title = 'MUSCLEOTL';
    // const navigate = useNavigate();


    return (
    <div style = {flexer} >
        <h1 style={title}>MUSCLEOTL</h1>
        <button id ='body' style = {buttonStyles} onClick={()=>navigate('/body')}>{bodyTest}</button>
        <div></div>
    </div>
    
    );
}


export default Home