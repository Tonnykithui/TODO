import {
  FETCH_TASK_SUCCESS,
  FETCH_TASK_REQUEST,
  FETCH_TASK_FAILURE,
} from "./FtaskTypes";

const initialTask = {
  loading: false,
  data: [],
  error: "",
};

const fetchTaskReducer = (state = initialTask, action) => {
  switch (action.type) {
    case FETCH_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchTaskReducer;
