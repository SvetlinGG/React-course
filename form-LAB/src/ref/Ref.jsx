

export default function Ref() {
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit');
    }

    return (
        <>
            <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="type here"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                
            />
        </form>
      

      <button
        
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm"
      >
        Focus
      </button>

      <Submit />
        </>
    )
}

function Submit(){

    return (
        <input type="submit" value="Create" />
    )
}