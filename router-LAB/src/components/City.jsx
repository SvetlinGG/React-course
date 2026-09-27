import { useParams } from 'react-router';

export default function City() {
    const params = useParams();

    console.log(params);
    


    return (
        <>
        <h2>City Page</h2>

        <p>The name of the city is {params.city}</p>
        
        </>
    );
}