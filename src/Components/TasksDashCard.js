import "./TasksDashCard.css";
import SquareCard from "../UI/SquareCard";

function TasksDashCard() {
  return (
    <SquareCard>
      <h4>Tasks</h4>
      {`Active: 12
      Finished: 7
      Total: 19`}
    </SquareCard>
  );
}

export default TasksDashCard;
