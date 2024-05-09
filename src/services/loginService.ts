export async function getToken(){
    const clientId = process.env.PUBLIC_CLIENT_ID
    const clientSecret = process.env.PUBLIC_CLIENT_SECRET
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    })
    const data = await response.json()
    return data;
}