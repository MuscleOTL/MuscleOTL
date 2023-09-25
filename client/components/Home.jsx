import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"

const buttonStyles = {
    backgroundColor: 'red',
    color: '#292B2C',
    fontSize: "1rem",
    lineHeight: 2,
    borderRadius: '5px',
    fontWeight: 'bold'
}

const flexer = {
    backgroundImage: "url('https://thumbs.dreamstime.com/b/bodybuilding-male-muscle-anatomy-strong-muscular-man-silhouette-front-side-back-view-vector-illustration-infografic-scheme-246471950.jpg')",
    backgroundPosition: 'top center',
    border: '1px solid grey',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const title = {
    fontFamily: 'Comic Sans',
    fontSize: "5rem",
    fontWeight: 1.5,
    lineHeight: 2.5,
    color: "#292B2C",
    backgroundColor: 'rgba(52, 52, 52,)',
    padding: "0em 1em 0em 1em",
    textShadow: "-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red",
    marginTop: '0'
}

function Home (){
    const[bodyTest, changeBody] = useState('TOUCH MY BODY')
    // const title = 'MUSCLEOTL';
    const navigate = useNavigate();

    return (
    <div style = {flexer} >
        <h1 style={title}>MUSCLEOTL</h1>
        <button id ='body' style = {buttonStyles} onClick={()=>navigate('/body')}>{bodyTest}</button>
        <div></div>
    </div>
    
    );
}

export default Home;