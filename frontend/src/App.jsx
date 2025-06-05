function App() {
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
          <li className="flex items-center justify-between rounded bg-gray-50 px-4 py-2 shadow">
            <div className="flex flex-1 items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-600"
                disabled
              />

              <span className="text-gray-400 line-through">Read a book</span>
            </div>
            <button className="text-red-500">❌</button>
          </li>

          <li className="flex items-center justify-between rounded bg-gray-50 px-4 py-2 shadow">
            <div className="flex flex-1 items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-600"
                disabled
              />

              <span>Buy groceries</span>
            </div>
            <button className="text-red-500">❌</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
