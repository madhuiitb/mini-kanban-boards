import { FaPlus, FaFilter } from "react-icons/fa";
import { BiSortAlt2, BiFilterAlt } from "react-icons/bi";
import Card from "./Card";
import styles from "./List.module.scss";
import Sort from "./Sort";
import { useState } from "react";

const List = ({
  id,
  name,
  tasks,
  onTaskMove,
  addTask,
  handleTaskDelete,
  handleTaskEdit,
}) => {

  const [expandSort, setExpandSort] = useState(false);
  const [titleSort, setTitleSort] = useState(true);
    const [descSort, setDescSort] = useState(true);
    const [createdSort, setCreatedSort] = useState(true);

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
        <div className={styles.buttons}>
          <button title="Add task" className={styles.addBtn} onClick={addTask}>
            <FaPlus />
          </button>
          <button className={styles.filterBtn}>
            <BiFilterAlt />
          </button>
          <button
            className={styles.sortBtn}
            onClick={() => setExpandSort(!expandSort)}
          >
            <BiSortAlt2 />
          </button>
        </div>
        {expandSort && (
          <div className={styles.sortingMenu}>
            <Sort
              titleSort={titleSort}
              setTitleSort={setTitleSort}
              descSort={descSort}
              setDescSort={setDescSort}
              createdSort={createdSort}
              setCreatedSort={setCreatedSort}
            />
          </div>
        )}
      </div>
      <div className={styles.cards}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            listId={id}
            taskId={task.id}
            title={task.title}
            description={task.description}
            created={task.createdAt}
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
