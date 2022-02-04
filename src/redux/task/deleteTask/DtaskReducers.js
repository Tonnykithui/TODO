import {
  TASK_DELETE,
  TASK_DELETE_FAILURE,
  TASK_DELETE_SUCCESS,
} from "./DtaskTypes";

const initialState = {
  loading: false,
  success: "",
  error: "",
};

const deleteTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_DELETE:
      return {
        ...state,
        loading: true,
      };

    case TASK_DELETE_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    case TASK_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteTaskReducer;
