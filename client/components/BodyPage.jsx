import React from 'react';
import Body from './Body.jsx';

const navStyle = {
    height: '60px', 
    // border: '1px solid grey',
    textShadow: "-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red",
    color: "#292B2C",
    fontSize: "3rem",
    fontWeight: '1.5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


}

const BodyPage = () => {
    return (
        <div>
            <div style = {navStyle}>MUSCLEOTL</div>
            <Body />
        </div>
    );
};

export default BodyPage;