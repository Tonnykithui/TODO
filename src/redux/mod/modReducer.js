import {
  HIDE_EDIT_MODAL,
  HIDE_MODAL,
  SHOW_EDIT_MODAL,
  SHOW_MODAL,
} from "./modTypes";

const initialState = {
  modal: false,
  editModal: false,
  data: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };

    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };

    case SHOW_EDIT_MODAL:
      return {
        ...state,
        editModal: true,
        data: action.payload,
      };

    case HIDE_EDIT_MODAL:
      return {
        ...state,
        editModal: false,
        data: {},
      };

    default:
      return state;
  }
};

export default modalReducer;
