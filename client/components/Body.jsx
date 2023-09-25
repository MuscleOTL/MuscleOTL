import React, { useState, useEffect } from 'react';
import ModalData from './ModalData.jsx';
import Modal from '@mui/material/Modal';

const Body = () => {
    const [selectedCell, setSelectedCell] = useState(null);

    const rows = 15;
    const cols = 15;

    const gridStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    };

    const rowStyle = {
        display: 'flex'
    };

    const backgroundImageStyle = {
        display: 'flex',
        width: '100%',
        paddingBottom: '100%',
        backgroundImage: `url(https://community.fabric.microsoft.com/t5/image/serverpage/image-id/448798i1C256498D1C654B4?v=v2)`,
        backgroundPosition: '',
        backgroundRepeat: "no-repeat",
        borderLeft: "400px solid transparent",
        borderRight: "1000px solid transparent"
    };

    const cellMuscleMap = {
        "2-1": "bicep",
        "2-3": "bicep",
        "2-6": "tricep",
        "2-8": "tricep",
        "2-2":"chest",
        "4-7": "glutes",
        "4-8": "glutes"
        
    };

    const grid = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const cellId = `${i}-${j}`;
            const cellStyle = {
                width: '5em',
                height: '5em',
                // border: '1px solid #ccc',  /* uncomment for grid */
                margin: '0.1px',
                cursor: 'pointer',
            };
            row.push(
                <div
                    key={cellId}
                    id={cellId}
                    style={cellStyle}
                    onClick={() => handleCellClick(cellId)}
                ></div>
            );
        }
        grid.push(<div key={`row-${i}`} style={rowStyle}>{row}</div>);
    }

    function handleCellClick(cellId) {
        console.log(`Cell clicked: ${cellId}`);
        setSelectedCell(cellId);

        if (cellMuscleMap[cellId]) {
            const muscle = cellMuscleMap[cellId];
            handleClick(muscle);
        }
        if(cellId === "4-2"){
            console.log('NOT COC APPROVED');
            alert('NOT COC APPROVED');
        }
    }



    const [bodyModal, setBodyModal] = useState(false);
    const [muscleName, setMuscleName] = useState('');
    const [muscleData, setMuscleData] = useState([]);

    function toggleModal() {
        setBodyModal(prev => !prev);
    }

    async function handleClick(muscle) {
        try {
            const data = await fetch(`/api/${muscle}`);
            const res = await data.json();
            console.log(res);
            setMuscleName(muscle);
            setMuscleData(res);
            toggleModal() // toggles modal
        } catch (err) {
            console.log(err)        
        }
    }

    return (
        <div>
            <button onClick={() => handleClick('bicep')}> Biceps </button>
            <button onClick={() => handleClick('tricep')}> Tricep </button>
            <button onClick={() => handleClick('chest')}> Chest </button>
            <button onClick={() => handleClick('glutes')}> Glutes </button>
        
            <Modal open={bodyModal} onClose={toggleModal}>
                <ModalData muscleName={muscleName} data={muscleData}/>
            </Modal>
        </div>
    );
};

export default Body;
