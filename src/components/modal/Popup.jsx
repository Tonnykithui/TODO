import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksDisp } from '../../redux';
import { hideMod } from '../../redux/mod/modActions';
import { addNewTask } from '../../redux/task/createTask/CtaskActions';

function Popup() {

    const dispatch = useDispatch();
    const modState = useSelector(state => state.modal);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('urgent');
    const [completed, setCompleted] = useState('');
    const [showModal, setShowModal] = useState(false);

    const options = [
        {
            label:'Urgent',
            value:'urgent'
        },
        {
            label:'Ongoing',
            value:'ongoing'
        },
        {
            label:'Running',
            value:'running'
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title == null && description == null){
            alert("Please fill in Title and Description")
        }

        var d = new Date();
        var datestring = d.getHours() + ":" + d.getMinutes();

        const task = {
            id:Math.abs((Math.random() * 20000)) + 5,
            Completed:completed,
            Description:description,
            Title:title,
            Status:status,
            Time:datestring
        }
        
        dispatch(addNewTask(task));
        dispatch(fetchTasksDisp());
        dispatch(hideMod());

        setCompleted('');
        setDescription('');
        setStatus('');
        setTitle('');

    }

    const styling = [];
    if(modState.modal){
        styling.push('modDisp')
    } else {
        styling.push('hideDisp');
    }

  return (
      <>
      <div className={styling}>
      <div className='absolute top-2 right-2 text-red-500'>
          <svg onClick={() => dispatch(hideMod())} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </div>
      <form className='w-80 text-lg'>
      <div className='mb-2'>
          <label htmlFor="" className='text-white'>Title</label>
          <input type="text" value={title} 
          defaultChecked={false}
          className='block p-2 outline-none w-full'
          onChange={(e) => setTitle(e.target.value)}
          />
      </div>
      <div className='mb-2'>
      <label htmlFor="" className='text-white'>description</label>
          <input type="text" value={description} 
          className='outline-none p-2 block w-full'
          onChange={(e) => setDescription(e.target.value)}
          />
      </div>
      <div className='my-3 grid grid-cols-3 pr-1'>
      <div className='col-span-2'>
      <label htmlFor="" className='text-white'>status</label>
      <select name="" id="" className='w-3/4 block outline-none' value={status} onChange={(e)=> setStatus(e.target.value)}>
          {
              options.map(option => (
                  <option value={option.value}>{option.label}</option>
              ))
          }
      </select>
      </div>
      <div className='mb-2 col-span-1 mr-l'>
      <label htmlFor="" className='text-white text-center'>completed</label>
          <input type="checkbox" value={completed} 
          className='block outline-none w-full'
          onChange={(e) => setCompleted(e.target.checked)}
          />
      </div>
      </div>
      <button className='btn w-24 mt-2' onClick={handleSubmit}>Submit</button>
      </form>
  </div>
      </>
  );
}

export default Popup;

