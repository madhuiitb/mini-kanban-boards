import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortNumericDown,
  FaSortNumericUp,
} from "react-icons/fa";
import styles from "./Sort.module.scss";
import { useState } from "react";

const Sort = ({
  titleSort,
  setTitleSort,
  descSort,
  setDescSort,
  createdSort,
  setCreatedSort,
}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.sort}>
        <span>Title</span>
        <button
          className={styles.sortBtn}
          onClick={() => setTitleSort(!titleSort)}
        >
          {titleSort ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
        </button>
      </div>
      <div className={styles.sort}>
        <span>Description</span>
        <button
          className={styles.sortBtn}
          onClick={() => setDescSort(!descSort)}
        >
          {descSort ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
        </button>
      </div>
      <div className={styles.sort}>
        <span>Created At</span>
        <button
          className={styles.sortBtn}
          onClick={() => setCreatedSort(!createdSort)}
        >
          {createdSort ? <FaSortNumericDown /> : <FaSortNumericUp />}
        </button>
      </div>
    </div>
  );
};

export default Sort;
