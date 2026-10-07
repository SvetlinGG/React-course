import { useRef } from 'react'


export default function Ref() {

    const formRef = useRef()


    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit');
    }

    return (
        <>
            <form onSubmit={submitHandler} ref={formRef}>
            <input
                type="text"
                placeholder="typing here"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                
            />
        </form>
      

      <button
        
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm"
      >
        Create
      </button>

      <Submit formRef={formRef} />
        </>
    )
}

function Submit({
    formRef,
}){

    const clickHandler = () => {
        
        formRef.current.requestSubmit()
    }

    return (
        <input 
            type="submit" 
            onClick={clickHandler}  
            value="Create"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            />
    )
}