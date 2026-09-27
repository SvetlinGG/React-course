const baseURL = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';

export async function fetchUsers(){
      const response = await fetch( baseURL, {
      headers: {
        'apikey': apiKey
      }
    })

    const data = await response.json();
    return data;
  }