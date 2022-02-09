import "./TaskCard.css";

function TaskCard(props) {
  return (
    <div className="task-card-single">
      <h5>&#9762; &nbsp; {`${props.title}`}</h5>
      <p>{`${props.desc}`}</p>
    </div>
  );
}

export default TaskCard;
