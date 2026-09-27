import { useLocation, useParams, useSearchParams } from 'react-router';

export default function City() {
    const params = useParams();
    const searchParams = useSearchParams();
    const location = useLocation;


    console.log(params);
    console.log(searchParams);
    console.log(location);
    
    


    return (
        <>
        <h2>City Page</h2>

        <p>The name of the city is {params.city}</p>
        
        </>
    );
}