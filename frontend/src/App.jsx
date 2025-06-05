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
      </div>
    </div>
  );
}

export default App;
