import React from 'react';
import './IOBoxes.scss';
import { Button, ButtonToolbar } from 'react-bootstrap';

const IOBoxes = ({ searchChange }) => {
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
      <ButtonToolbar>
        <Button bsStyle="success" bsSize="small">
           ➡
        </Button>
      </ButtonToolbar>  
      <label>
        <input
          className='pa3 ba b--black bg-white'
          type='text'
          placeholder='Output'
          onChange={searchChange}
        />
      </label>
    </div>
  );
}

export default IOBoxes;