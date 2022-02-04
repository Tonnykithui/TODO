import {
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
} from "./CtaskTypes";

import axios from "axios";

export const createTask = (task) => {
  return {
    type: CREATE_TASK,
    payload: task,
  };
};

export const createTaskSuccess = (success) => {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: success,
  };
};

export const createTaskFailure = (error) => {
  return {
    type: CREATE_TASK_FAILURE,
    payload: error,
  };
};

export const addNewTask = (task) => {
  return (dispatch) => {
    dispatch(createTask);
    axios
      .post("http://localhost:5000/tasks", task)
      .then((response) => {
        const result = response.data;
        dispatch(createTaskSuccess(result));
      })
      .catch((error) => {
        dispatch(createTaskFailure(error.Message));
      });
  };
};
