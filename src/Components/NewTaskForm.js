import "./NewTaskForm.css";
import { useRef } from "react";

function NewTaskForm(props) {
  const formSubmitHandler = function (e) {
    e.preventDefault();
    props.onAdd({
      title: taskTitle.current.value,
      desc: taskDesc.current.value,
    });
  };

  const taskTitle = useRef();
  const taskDesc = useRef();

  return (
    <form className="new-task" onSubmit={formSubmitHandler}>
      <h5>Create Task</h5>
      <label htmlFor="task-title">Task title:</label>
      <input ref={taskTitle} id="task-title" type="text"></input>
      <label htmlFor="task-desc">Enter task description:</label>
      <input ref={taskDesc} id="task-desc"></input>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
