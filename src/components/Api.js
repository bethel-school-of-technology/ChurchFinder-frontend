
const API_URL = 'http://localhost:5000/churches/churchlist';

export async function listChurches() {
    const response = await fetch(`${API_URL}`);
    console.log(response);
    return response.json();
}

