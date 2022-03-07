import "./NewTaskForm.css";
import React, { useRef } from "react";

function NewTaskForm(props) {
  const formSubmitHandler = function (e) {
    e.preventDefault();
    const title = taskTitle.current.value;
    const desc = taskDesc.current.value;
    const id = Math.random();

    props.onAdd({
      id: id,
      title: title,
      desc: desc,
      status: "active",
    });

    // Adding to currently loaded user
    props.dataUpdater(
      {
        tasks: [
          ...props.user.tasks,
          { id: id, title: title, desc: desc, status: "active" },
        ],
      },
      props.user.id
    );

    // Addint to database
    fetch(
      `https://react-1bbaa-default-rtdb.europe-west1.firebasedatabase.app/users/${props.user.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...props.user,
          tasks: [
            ...props.user.tasks,
            { id: id, title: title, desc: desc, status: "active" },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("New task added to database");
        return res.json().then((data) => {
          console.log(data.tasks);
        });
      } else {
        return res.json().then((data) => console.log("error" + data));
      }
    });

    // END of fetch function
  };

  const taskTitle = useRef();
  const taskDesc = useRef();

  return (
    <React.Fragment>
      <form className="new-task" onSubmit={formSubmitHandler}>
        <input
          ref={taskTitle}
          id="task-title"
          type="text"
          placeholder="enter title"
        ></input>

        <textarea
          ref={taskDesc}
          id="task-desc"
          placeholder="enter task description"
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
      <button type="text" className="cancel" onClick={props.onTaskToggle}>
        Cancel
      </button>
    </React.Fragment>
  );
}

export default NewTaskForm;
