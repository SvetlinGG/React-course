

export default function FormActions() {
    
        
        
        
            const submitHandler = (e) => {
                // prevent page reload
                e.preventDefault()
                

                const formData = new FormData(e.target);

                const username = formData.get('username')
            }
        
            return (
                <>
                    <form onSubmit={submitHandler} >
                    <input
                        type="text"
                        name="username"
                        placeholder="typing here"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        
                    />
                    <Submit />
                </form>
              
        
              
                </>
            )
        }
        
        function Submit(){
        
            
        
            return (
                <input 
                    type="submit"  
                    value="Create"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                    />
        )
       
}