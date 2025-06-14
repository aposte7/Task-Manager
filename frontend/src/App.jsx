import { useState } from "react";
import Button from "./components/Button";

const initialTasks = [
  { id: 1, title: "Develop Task Manager App", completed: false },
  { id: 2, title: "Refactor Project", completed: true },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleComplete = (id) => {
    const modTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(modTask);
  };
  const addTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) {
      alert("Task title cannot be empty.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    };

    setTasks([newEntry, ...tasks]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter.toLocaleLowerCase() === "completed") return task.completed;
    if (filter.toLocaleLowerCase() === "pending") return !task.completed;
    return true;
  });

  const filters = [
    { id: 1, title: "All" },
    { id: 2, title: "Completed" },
    { id: 3, title: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">Task Manager</h1>

        <div className="mb-4 flex gap-2">
          <input
            className="flex-1 rounded border border-gray-300 p-2"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button
            onClick={addTask}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Add
          </button>
        </div>

        <div className="mb-4 flex justify-center gap-3">
          {filters.map((tagType) => (
            <Button
              key={tagType.id}
              tagType={tagType}
              style={
                filter.toLowerCase() === tagType.title.toLowerCase()
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }
              handleClick={setFilter}
            />
          ))}
        </div>
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded bg-gray-50 px-4 py-2 shadow"
            >
              <div className="flex flex-1 items-center gap-3">
                <input
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  type="checkbox"
                  className="h-4 w-4 text-green-600"
                />

                <span
                  className={`${task.completed ? "text-gray-400 line-through" : ""}`}
                >
                  {task.title}
                </span>
              </div>
              <button
                className="text-red-500"
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
