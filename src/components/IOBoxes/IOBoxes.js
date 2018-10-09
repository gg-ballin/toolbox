import React from 'react';
import './IOBoxes.scss';


const IOBoxes = ({ searchChange, onButtonSubmit }) => {
  return  (
    
    <div className='pa2'>
      <label>
        <input
          className='pa3 ba b--black bg-white'
          type='search'
          placeholder='Input'
          onChange={searchChange}
        />
      </label>
      <br></br>
        <button
          className='w-30 grow f4 link ph3 pv2 dib white bg-red'
          onClick={onButtonSubmit}>
              ➡
        </button>
      <label>
        <input
          className='pa3 ba b--black bg-white'
          type='text'
          placeholder='Output'
        />
      </label>
    </div>
  );
}

export default IOBoxes;