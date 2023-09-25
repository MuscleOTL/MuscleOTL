import React, { useState, useEffect } from 'react';

const styleName = {
  listStyleType: 'none',
  textTransform: 'capitalize',
};

const muscleStyleName = {
  textTransform: 'uppercase',
};

const Modal = ({ muscleName, muscleData, setOpenModal }) => {
  console.log('inside modal', muscleData);
  const exerciseList = muscleData.map((exercise, index) => {
    console.log(exercise.description);
    return (
      <>
        <li key={index} className='styleName' style={styleName}>
          <h3>{exercise.exercise_name}</h3>
        </li>
        <li key={index} className='description'>
          {exercise.description}
        </li>
      </>
    );
  });

  return (
    <div className='modal react-model-overlay'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h3 className='modal-title' style={muscleStyleName}>
            {muscleName}
          </h3>
        </div>
        <div className='modal-body'>
          <ul>{exerciseList}</ul>
        </div>
        <div className='modal-footer'>
          <button className='close-btn' onClick={setOpenModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
