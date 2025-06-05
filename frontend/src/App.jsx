import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Develop Task Manager App", completed: false },
  { id: 2, title: "Refactor Project", completed: true },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleComplete = (id) => {
    const modTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(modTask);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">📝 Task Manager</h1>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            className="flex-1 rounded border border-gray-300 p-2"
            placeholder="Enter a task..."
            disabled
          />
          <button className="rounded bg-blue-500 px-4 py-2 text-white" disabled>
            Add
          </button>
        </div>

        <div className="mb-4 flex justify-center gap-3">
          <button className="rounded bg-blue-600 px-4 py-1 text-white">
            All
          </button>
          <button className="rounded bg-gray-200 px-4 py-1 text-gray-700">
            Completed
          </button>
          <button className="rounded bg-gray-200 px-4 py-1 text-gray-700">
            Pending
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded bg-gray-50 px-4 py-2 shadow"
            >
              <div className="flex flex-1 items-center gap-3">
                <input
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
