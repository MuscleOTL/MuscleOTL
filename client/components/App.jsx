import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './homeComponent';

function App() {
    
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/body" element={<Body/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
