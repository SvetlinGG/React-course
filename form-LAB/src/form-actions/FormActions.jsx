import { useFormStatus } from "react-dom";

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Wait is over');
        }, time)
    });
}


export default function FormActions() {
    
        
        
        
            const submitHandler = (formData) => {
                // prevent page reload
                //e.preventDefault()
                
                // parse form data
                //const formData = new FormData(e.target);
                // Get data from form
                const username = formData.get('username');

                // do something
                console.log(username);
                // clenup form 
                //e.target.reset();

                
            }
        
            return (
                <>
                    <form action={submitHandler} >
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
        
            const {pending} = useFormStatus()
        
            return (
                <input 
                    type="submit"  
                    value="Create"
                    disabled={pending}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                    />
        )
       
}