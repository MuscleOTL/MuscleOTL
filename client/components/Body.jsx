import React, { useState, useEffect } from 'react';
import ModalData from './ModalData.jsx';
import Modal from '@mui/material/Modal';

const Body = () => {
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
