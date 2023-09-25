import React, { useState, useEffect } from 'react';

function Body() {
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

    async function handleClick(muscle) {
        const data = await fetch(`/api/${muscle}`);
        const res = await data.json();
        console.log(res);
        }

    return (
        <div id='Big Div' style={backgroundImageStyle}>
            <div style={gridStyle}>
                {grid}
            </div>
        </div>
    );
}

export default Body;








