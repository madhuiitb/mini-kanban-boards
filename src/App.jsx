import { useState } from 'react'
import './App.css'
import List from './components/List.jsx'
import { LISTS } from './lib/list'
import Modal from './components/Modal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boards, setBoards] = useState(LISTS);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: ""
  });

  const [listId, setListId] = useState("todo");
  const [taskId, setTaskId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  
  const handleFormData = (e) => {
    let newData = { ...formData };
    const name = e.target.name;
    const value = e.target.value;
    newData = { ...newData, [name]: value };
    setFormData(newData);
    
  }

  const handleAddTask = (listId) => {
    const randomId = crypto.randomUUID();
    setTaskId(randomId);
    setIsEditMode(false);
    setFormData({ id: randomId, title: "", description: "" });
    setIsModalOpen(true);
    setListId(listId);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  const handleSumitData = () => {
    handleCloseModal();
    const newLists = boards.map((list) => {
      if (list.id === listId) {
        if (isEditMode) {
          const updatedTasks = list.tasks.map((task) => task.id === formData.id ? formData : task);
          return {...list, tasks:updatedTasks}
        } else {
          return { ...list, tasks: [formData, ...list.tasks] };
        }
      }
      return list;
    });
    setBoards(newLists);
  };

const handleTaskMove = (taskId, sourceId, destinationId) => {

 let movedTask = null;
 const newLists = boards.map((list) => {
   if (list.id === sourceId) {
     const remaining = list.tasks.filter((task) => {
       if (task.id === taskId) {
         movedTask = task;
         return false;
       }
       return true;
     });
     return { ...list, tasks: remaining };
   }
   return list;
 });
  
 if (movedTask) {
   setBoards(
     newLists.map((list) =>
       list.id === destinationId ? { ...list, tasks: [movedTask, ...list.tasks] } : list
     )
   );
 }
};
  
  const handleTaskDelete = (taskId, listId) => {
    const newList = boards.map((list) => {
      if (list.id === listId) {
        const remaining = list.tasks.filter((task) => task.id!==taskId);
        return { ...list, tasks: remaining };
      }
      return list;
    });
    setBoards(newList);
  }

  const handleTaskEdit = (taskObj, listId) => {
    const { taskId } = taskObj;
    setFormData({ id: taskId, ...taskObj });
    setListId(listId);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  return (
    <>
      <h2>Mini- Kanban-Boards</h2>
      <Modal
        isOpen={isModalOpen}
        formData={formData}
        handleFormData={handleFormData}
        onClose={handleCloseModal}
        handleSumitData={handleSumitData}
      />
      <div className="lists">
        {boards.map((list) => (
          <List
            key={list.id}
            id={list.id}
            name={list.name}
            tasks={list.tasks}
            onTaskMove={handleTaskMove}
            addTask={() => handleAddTask(list.id)}
            handleTaskDelete={handleTaskDelete}
            handleTaskEdit={handleTaskEdit}
          />
        ))}
      </div>
    </>
  );
}

export default App
