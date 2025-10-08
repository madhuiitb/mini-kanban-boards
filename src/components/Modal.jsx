import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  onClose,
  formData,
  handleFormData,
  handleSumitData,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSumitData(e);
        }}
        className={styles.form}
      >
        <div className={styles.fields}>
          <label htmlFor="title">Task name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => handleFormData(e)}
          />
        </div>

        <div className={styles.fields}>
          <label htmlFor="description">Description</label>
          <textarea
            type="textarea"
            name="description"
            value={formData.description}
            onChange={(e) => handleFormData(e)}
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.btn} type="submit">
            Submit
          </button>
          <button type="button" className={styles.btn} onClick={onClose}>
           X
          </button>
        </div>
      </form>
    </div>
  );
};
export default Modal;
