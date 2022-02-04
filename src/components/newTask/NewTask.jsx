import React from 'react';
import { useDispatch } from 'react-redux';
import { showMod } from '../../redux/mod/modActions';

const NewTask = () => {

  const dispatch = useDispatch();
  var option = { month: 'short', day: 'numeric', year:'numeric'}
  var options = { weekday: 'long'};
  var today  = new Date();
  

  return (
     <div className='flex justify-between'>
        <div>
          <h4 className='text-neutral-500 text-sm'>{today.toLocaleDateString("en-US", option)}</h4>
          <h2 className='font-semibold text-lg'>{today.toLocaleDateString("en-US", options)}</h2>
        </div>
        <div>
          <button className='btn' onClick={() => dispatch(showMod())}>New Task</button>
        </div>
    </div>
  );
};

export default NewTask;
