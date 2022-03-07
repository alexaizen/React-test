import "./TasksDashCard.css";
import SquareCard from "../UI/SquareCard";

function TasksDashCard(props) {
  return (
    <SquareCard>
      <h4>Tasks </h4>
      {`Active:
      Finished: 7
      Total: 19`}
    </SquareCard>
  );
}

export default TasksDashCard;
