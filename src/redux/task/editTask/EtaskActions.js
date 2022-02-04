import {
  TASK_UPDATE,
  TASK_UPDATE_FAILURE,
  TASK_UPDATE_SUCCESS,
} from "./EtaskTypes";

import axios from "axios";

export const taskUpdate = (task) => {
  return {
    type: TASK_UPDATE,
    payload: task,
  };
};

export const taskUpdateSuccess = (success) => {
  return {
    type: TASK_UPDATE_SUCCESS,
    payload: success,
  };
};

export const taskUpdateFailure = (error) => {
  return {
    type: TASK_UPDATE_FAILURE,
    payload: error,
  };
};

export const taskUpdating = (id, updatedTask) => {
  return (dispatch) => {
    dispatch(taskUpdate(updatedTask));
    axios
      .put(`http://localhost:5000/tasks/${id}`, updatedTask)
      .then((response) => {
        const result = response.data;
        dispatch(taskUpdateSuccess(result));
      })
      .catch((error) => {
        dispatch(taskUpdateFailure(error.Message));
      });
  };
};
