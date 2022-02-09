import React, { useState } from "react";
import "./Tasks.css";
import NavBar from "../NavBar";
import MainAreaMediumThree from "../UI/MainAreaMediumThree";
import RightSidebar from "../UI/RightSidebar";
import StatusBar from "../StatusBar";
import NewTaskForm from "../Components/NewTaskForm";
import TaskCard from "../UI/TaskCard";

function Tasks() {
  const taskList = [
    {
      title: "First Task",
      desc: "Description of first task of first task of first task of first task",
    },
    {
      title: "Second",
      desc: "Second description vcv vdfvd description vcv vdfvd description vcv vdfvd",
    },
    {
      title: "Third Ttitle",
      desc: "Third tasks desc hh jjg tasks desc hh jjg tasks desc hh jjg",
    },
  ];

  const [taskListState, setTaskListState] = useState(taskList);

  const newTaskHandler = function (task) {
    setTaskListState((prevState) => [task, ...prevState]);
  };

  return (
    <React.Fragment>
      <NavBar>
        <h2>Tasks</h2>
      </NavBar>
      <MainAreaMediumThree>
        {taskListState.map((taskitem) => (
          <TaskCard
            key={Math.random()}
            title={taskitem.title}
            desc={taskitem.desc}
          />
        ))}
      </MainAreaMediumThree>
      <RightSidebar>
        <NewTaskForm onAdd={newTaskHandler}></NewTaskForm>
      </RightSidebar>
      <StatusBar></StatusBar>
    </React.Fragment>
  );
}

export default Tasks;
