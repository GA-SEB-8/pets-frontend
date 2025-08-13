import axios from "axios"

const baseUrl = import.meta.env.VITE_BACKEND_URL
// create a pet

const create = async (data) => {
    try {
        const url = `${baseUrl}/pets/new`
        const response = await axios.post(url, data)
        return response
    } catch (error) {
        return error
    }
}

const deletePet = async (id) => {
    try {
        const url = `${baseUrl}/pets/${id}`
        const response = await axios.delete(url)
        return response
    } catch (error) {
        return error
    }
}


export {
    create,
    deletePet
}