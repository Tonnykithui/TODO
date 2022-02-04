import {
  HIDE_EDIT_MODAL,
  HIDE_MODAL,
  SHOW_EDIT_MODAL,
  SHOW_MODAL,
} from "./modTypes";

export const showMod = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const hideMod = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const showEditMod = (task) => {
  return {
    type: SHOW_EDIT_MODAL,
    payload: task,
  };
};

export const hideEditMod = () => {
  return {
    type: HIDE_EDIT_MODAL,
  };
};
