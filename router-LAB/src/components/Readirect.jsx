import { Navigate, useNavigate } from "react-router";

export default function Redirect() {

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/about');
    }

    if ( Math.random < 0.5){
        return <Navigate to='/about' replace={true}/>
    }
    return (
        <h2 onClick={navigateHandler}>Not Redirected</h2>
    );
}