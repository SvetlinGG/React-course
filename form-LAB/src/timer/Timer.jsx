export default function Timer() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Timer</h1>

        <div className="text-5xl font-mono font-bold text-gray-800 mb-8 tabular-nums">
          0 s
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            
            className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 active:bg-green-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Start
          </button>

          <button
            onClick={stop}
            
            className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 active:bg-red-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Stop
          </button>

          <button
            
            className="px-5 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 active:bg-gray-800 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
    
}