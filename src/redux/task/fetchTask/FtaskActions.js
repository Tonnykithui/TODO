import {
  FETCH_TASK_FAILURE,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_REQUEST,
} from "./FtaskTypes";

import axios from "axios";

export const fetchTask = () => {
  return {
    type: FETCH_TASK_REQUEST,
  };
};

export const fetchTaskSuccess = (task) => {
  return {
    type: FETCH_TASK_SUCCESS,
    payload: task,
  };
};

export const fetchTaskFailure = (error) => {
  return {
    type: FETCH_TASK_FAILURE,
    payload: error,
  };
};

export const fetchTasksDisp = () => {
  return (dispatch) => {
    dispatch(fetchTask());
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchTaskSuccess(tasks));
      })
      .catch((error) => {
        const errMsg = error.Message;
        dispatch(fetchTaskFailure(errMsg));
      });
  };
};
