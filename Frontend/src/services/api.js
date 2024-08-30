

const API_URL = 'http://localhost:3000/'


export const fetchBooks = async () => {
    try{
        const response = await fetch(`${API_URL}/books`);
        if(!response.ok) {
            throw new Error('Failed fetching');
        }
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}