import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasksDisp } from '../../redux';
import { showEditMod } from '../../redux/mod/modActions';
import { deleteTask } from '../../redux/task/deleteTask/DtaskActions';

const Task = ({task}) => {

    const dispatch = useDispatch();
    const [showButtons, setShowButtons] = useState(false);

    const handleDelete = () => {
      dispatch(deleteTask(task.id));
      dispatch(fetchTasksDisp());
    }

  return (
  <div className='bg-white relative rounded px-4 py-2'>
      <div className='border-b-2 border-red-200 py-2'>
          <h3 className='text-blue-400'>{task.Status}</h3>
          <div className='absolute right-0 top-4 hover:bg-slate-200 rounded-full'
           /* onMouseLeave={() => setShowButtons(false)} 
           onMouseEnter={() => setShowButtons(true)} */
           onClick={() => setShowButtons(!showButtons)}
           >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
             </svg>
          </div>
          {
              showButtons && (
                <div className='absolute text-sm right-4 top-2 mr-3 flex flex-col'>
                  <button className='btnC bg-blue-400'
                  onClick={() => dispatch(showEditMod(task))}
                  >Edit</button>
                  <button className='btnC bg-red-400'
                   onClick={handleDelete}>Delete</button>
                </div>
              )
          }
          
      </div>
      <div className='mt-2 border-l-2 border-green-600 px-2'>
          <h2 className='font-bold text-xl'>{task.Title}</h2>
          <p className='text-blue-600/75'>{task.Description}</p>
          
      </div>
      <div className='flex justify-start py-2'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-strokelinecap="round" stroke-strokelinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className='ml-2'>
              <p>{task.Time}</p>
          </div>
      </div>
  </div>
  );

  
};

export default Task;
