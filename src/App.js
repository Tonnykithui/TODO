import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import Popup from "./components/modal/Popup";
import NewTask from "./components/newTask/NewTask";
import Tasks from "./components/tasks/Tasks";
import store from "./redux/store";
import { useState } from "react";
import EditTask from "./components/modal/EditTask";

function App() {
  return (
    <Provider store={store}>
      <div className="h-full min-h-fit w-96 bg-slate-200 rounded mx-auto p-4 m-2 relative">
        <Header />
        <NewTask />
        <Tasks />
        <Popup />
        <EditTask />
      </div>
    </Provider>
  );
}

export default App;
