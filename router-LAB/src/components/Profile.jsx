import { Navigate } from "react-router";

export default function Profile({
    username
}) {

    // if (!username){
    //     return <Navigate to='/login'/>
    // }
    return (
        <>
        <h2>Profile</h2>

        <strong>{username}</strong>
        </>
    );
}