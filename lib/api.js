import axios from "axios"

const baseUrl = import.meta.env.VITE_BACKEND_URL
// create a pet

const create = async (data) => {
    try {
        const url = `${baseUrl}/pets/new`
        const response = await axios.post(url, data)
        return response
    } catch (error){
        return error
    }
}

export {
    create
}