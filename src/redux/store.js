import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//REDUCERS
import fetchTaskReducer from "./task/fetchTask/FtaskReducers";
import createTaskReducer from "./task/createTask/CtaskReducers";
import deleteTaskReducer from "./task/deleteTask/DtaskReducers";
import editTaskReducer from "./task/editTask/EtaskReducers";
import modalReducer from "./mod/modReducer";

const reducers = combineReducers({
  tasks: fetchTaskReducer,
  modal: modalReducer,
  newTask: createTaskReducer,
  deleteTask: deleteTaskReducer,
  editTask: editTaskReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
