import React, { useEffect } from 'react';
import Task from './Task';
import { connect, useDispatch, useSelector } from 'react-redux';
import {fetchTasksDisp} from '../../redux/index';

const Tasks = () => {

  const tasks = useSelector(state => state.tasks);
  
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchTasksDisp());
  }, []);

  return tasks.data.loading ? (<h1>Loading</h1>) :
   tasks.data.error ? (<h1>{tasks.data.error}</h1>) :
   (
     <ul className='overflow-y-auto max-h-96'>
       {
         tasks && tasks.data && tasks.data.map((task) => (
           <li key={task.id} className='my-3'><Task task={task}/></li>
         ))
       }
     </ul>
   )
}



export default Tasks;