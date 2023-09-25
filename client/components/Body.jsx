import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx';

const Body = () => {
  const [openModal, setOpenModal] = useState(false);
  const [muscleData, setMuscleData] = useState([]);
  const [muscleName, setMuscleName] = useState('');

  async function handleClick(muscle) {
    try {
      const data = await fetch(`/api/${muscle}`);
      const res = await data.json();
      console.log(res);

      if (data.status === 200) {
        setOpenModal(!openModal);
        setMuscleData(res);
        setMuscleName(muscle);
        console.log(openModal);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(openModal);
  }, [openModal]);

  return (
    <div>
      <button onClick={() => handleClick('bicep')}> Biceps </button>
      <button onClick={() => handleClick('tricep')}> Tricep </button>
      <button onClick={() => handleClick('chest')}> Chest </button>
      <button onClick={() => handleClick('glutes')}> Glutes </button>
      <Modal
        muscleData={muscleData}
        muscleName={muscleName}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default Body;
