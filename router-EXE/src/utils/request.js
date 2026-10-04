
const url = 'https://vzchkiwbtnsuuvrzlwnu.supabase.co/rest/v1';
const apiKey = 'sb_publishable_tBMYUVi_TybPjWKRBoPjSQ_K34DJiEd';

export default async function request(path = "/", method = "GET", data = null){

    const options = {
        headers: {
            apiKey,
        }
    };

    if ( method !== "GET"){
        options.method = method;
    }

    if ( data){
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
        
    }

    const response = await fetch(`${url}/${path}`, options);

    if (!response){
        throw new Error(`Error: ${response.status}`)
    }

    return response.json();
    

}