import { useRef } from "react";

export default function Ref() {

    const ref = useRef();

    const focusHandler = () => {

    }


    return (
        <>
        <h1>Use Ref Hook</h1>

        <input 
            type="text" 
            placeholder="type here" 
            className="w-30% px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            row='4' />

        <button 
            onClick={focusHandler} 
            className="w-200px bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >  
            Focus</button>
        </>
    );
}