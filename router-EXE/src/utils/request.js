
const url = 'https://vzchkiwbtnsuuvrzlwnu.supabase.co/rest/v1/games';
const apiKey = 'sb_publishable_tBMYUVi_TybPjWKRBoPjSQ_K34DJiEd';

export default async function request(path = '/', method = 'GET', data = null){

    const options = {
        headers: {
            apiKey,
        }
    };

    if ( method !== 'GET'){
        options.method = method;
    }

    if ( data){
        options.body = JSON.stringify(data);
        options.headers["Content-Type"] = "applicationjson"
    }

    const response = await fetch(`${url}/${path}`, options);

}