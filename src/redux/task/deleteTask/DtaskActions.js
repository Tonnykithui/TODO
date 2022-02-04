import {
  TASK_DELETE,
  TASK_DELETE_FAILURE,
  TASK_DELETE_SUCCESS,
} from "./DtaskTypes";

import axios from "axios";

export const taskDelete = () => {
  return {
    type: TASK_DELETE,
  };
};

export const taskDeleteSuccess = (success) => {
  return {
    type: TASK_DELETE_SUCCESS,
    payload: success,
  };
};

export const taskDeleteFailure = (error) => {
  return {
    type: TASK_DELETE_FAILURE,
    payload: error,
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch(taskDelete());
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        const result = response.data;
        dispatch(taskDeleteSuccess(result));
      })
      .catch((error) => {
        dispatch(taskDeleteFailure(error.Message));
      });
  };
};
