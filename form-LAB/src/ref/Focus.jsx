import { useEffect, useRef } from "react";

export default function Focus() {

    const myRef = useRef()

    const focusHandler = () => {
        myRef.current.focus()
    }

    useEffect(() => {
        myRef.current.focus()
    })
    


    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                    Use Ref Hook
                </h1>

            <div className="flex items-center gap-3">

        <form>
            <input
                type="text"
                placeholder="type here"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ref={myRef}
            />
        </form>
      

      <button
        onClick={focusHandler}
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm"
      >
        Focus
      </button>
    </div>
  </div>
</div>
        </>
    );
}