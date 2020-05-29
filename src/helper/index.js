export const getcontacts = async (next) => {
    try {
        const response = await fetch('http://localhost:8000/api/contacts', {
            method: 'GET'
        })
        return await response.json();
    }
    catch (err) {
        return console.log(err)
    }
}