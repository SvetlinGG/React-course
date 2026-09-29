import { Navigate } from 'react-router-dom'
export default function RouteGuard({user}) {

    if (!user){
        return <Navigate to='/login'/>
    }
    return (
        
    );
}