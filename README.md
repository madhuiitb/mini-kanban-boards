---
# Mini Kanban Boards

A simple Kanban-style task board built with **React** and **Vite**.  
You can add, edit, delete, and drag tasks between lists.

---

## 🚀 Live Demo

You can see the project running here:
[mini-kanban-boards](https://mini-kanban-boards.vercel.app/)

---
## 🚀 Features

- Add new tasks to any board/list  
- Edit existing tasks  
- Delete tasks  
- Drag & drop tasks between lists (boards)  
- Uses unique UUIDs for tasks  
- Modal overlay for adding / editing tasks  
- Clean UI with CSS modules  

---

## 🏗 Tech Stack

| Technology | Purpose |
|------------|---------|
| React      | UI library |
| Vite       | Build tool / dev server |
| CSS Modules | Scoped styling |
| crypto.randomUUID() | Generate unique IDs |
| React Drag-and-Drop / custom logic | Task moving between boards |

---

## 📂 Project Structure (excerpt)

```

├── public/
├── src/
│   ├── components/
│   │   ├── List.jsx
│   │   ├── Modal.jsx
│   │   └── …
│   ├── lib/
│   │   └── list.js     ← initial board config
│   ├── App.jsx
│   ├── index.css / main CSS
│   └── main.jsx / entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

````

---

## 💾 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Install

```bash
git clone https://github.com/madhuiitb/mini-kanban-boards.git
cd mini-kanban-boards
npm install
# or
yarn install
````

### Run in development mode

```bash
npm run dev
# or
yarn dev
```

This starts the Vite dev server. Open your browser at the address it shows (typically `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
# or
yarn build
```

The production build will be in the `dist/` folder.

---

## 📌 Usage & Example

1. Click **“+”** on any list/column.
2. Fill in **Title** and **Description** in the modal, then “Submit”.
3. To edit a task, there’s an **Edit** button (in List component) that opens the modal populated with the task’s data.
4. To delete, click the **Delete** button on a task.
5. Drag & drop tasks between lists to move them.

---

## 🛠 Implementation Notes & Tips

* When adding tasks, a UUID is generated and stored in each task’s `id` field (using `crypto.randomUUID()`).
* For editing, the app tracks an `isEditMode` flag to decide whether to update an existing task or add a new one.
* Deletion should use `.filter()` instead of `.map()` to remove the task.
* Ensure each task uses `key={task.id}` when rendering lists to avoid React key warnings.
* Modal uses conditional rendering (`if (!isOpen) return null`) to hide when not in use.

---

## ⚠️ Known Issues / To Be Improved
* CSS overflow or container clipping may hide modal or tooltips.
* Styling and responsiveness could be improved.
* Persistence is not implemented — tasks will reset on page reload.

---

## 🧾 License

This project is open-source.

---
