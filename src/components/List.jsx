import { FaPlus } from "react-icons/fa";
import Card from "./Card";
import styles from "./List.module.scss";
const List = ({
  id,
  name,
  tasks,
  onTaskMove,
  addTask,
  handleTaskDelete,
  handleTaskEdit,
}) => {
  const handleCardDragStart = (event, taskId) => {
    event.dataTransfer.setData("taskId", taskId);
    event.dataTransfer.setData("sourceId", id);
  };

  const handleListDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("taskId");
    const sourceId = event.dataTransfer.getData("sourceID");
    const destinationId = id;
    if (sourceId !== destinationId) {
      onTaskMove(String(taskId), String(sourceId), String(destinationId));
    }
  };
  const handleListDragOver = (event) => {
    event.preventDefault();
  };
  const handleListDragLeave = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={styles.list}
      onDragOver={handleListDragOver}
      onDragLeave={handleListDragLeave}
      onDrop={handleListDrop}
    >
      <div className={styles.header}>
        <h3>{name}</h3>
        <button
          title="Add task"
          className={styles.addBtn} onClick={addTask}>
            <FaPlus />
        </button>
      </div>
      <div className={styles.cards}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            listId={id}
            taskId={task.id}
            title={task.title}
            description={task.description}
            onDragStart={handleCardDragStart}
            handleTaskDelete={handleTaskDelete}
            handleTaskEdit={handleTaskEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
