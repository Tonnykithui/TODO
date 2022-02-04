import {
  CREATE_TASK,
  CREATE_TASK_FAILURE,
  CREATE_TASK_SUCCESS,
} from "./CtaskTypes";

const initialState = {
  loading: false,
  success: "",
  error: "",
};

const createTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        loading: true,
      };

    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        success: action.success,
      };

    case CREATE_TASK_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default createTaskReducer;
