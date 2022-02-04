import {
  TASK_UPDATE,
  TASK_UPDATE_FAILURE,
  TASK_UPDATE_SUCCESS,
} from "./EtaskTypes";

const initialState = {
  loading: false,
  success: "",
  error: "",
};

const editTaskReducer = (state = initialState, action) => {
  return (dispatch) => {
    switch (action.type) {
      case TASK_UPDATE:
        return {
          ...state,
          loading: true,
        };

      case TASK_UPDATE_SUCCESS:
        return {
          ...state,
          success: action.payload,
        };

      case TASK_UPDATE_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
};

export default editTaskReducer;
