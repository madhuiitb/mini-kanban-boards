import {FaEdit, FaTrash } from "react-icons/fa";

import styles from "./Card.module.css";
import { useEffect, useState } from "react";

const CHIPS = ["sev-1", "high", "low", "sev-2", "medium"];

const Card = ({
  listId,
  taskId,
  title,
  description,
  onDragStart,
  handleTaskDelete,
  handleTaskEdit,
}) => {
    const [randomChips, setRandomChips] = useState([]);

    useEffect(() => {
        const RandomChips = (chips) => {
          const count = Math.floor(Math.random() * 2) + 2;
          const shuffled = [...chips].sort(() => 0.5 - Math.random());
          return shuffled.slice(0, count);
        };
        const finalChips = RandomChips(CHIPS);
        setRandomChips(finalChips);
    }, []);
  const handleDragEnd = (event) => {
    event.preventDefault();
  };
    
    
    
  return (
    <div
      draggable
      className={styles.card}
      onDragStart={(event) => onDragStart(event, taskId)}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.header}>
        <h4>{title}</h4>
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={() =>
              handleTaskEdit({ taskId, title, description }, listId)
            }
          >
            <FaEdit />
          </button>
          <button
            className={styles.btn}
            onClick={() => handleTaskDelete(taskId, listId)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
        <div className={styles.chips}>
          {randomChips.map((chip) => (
            <span className={styles.chip}>{chip}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
