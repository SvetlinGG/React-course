import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
export default function RouteGuard({user}) {

    if (!user){
        return <Navigate to='/login'/>
    }
    return <Outlet />
}