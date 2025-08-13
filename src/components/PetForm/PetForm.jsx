import { useState } from "react"
import axios from "axios"

const PetForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: ''
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async () => {
        //console.log formData
        const url = `${import.meta.env.VITE_BACKEND_URL}/pets/new`
        const response = await axios.post(url, formData)
        console.log(response)
    }

    return (
        <div>
            <h2>Add Your Pet</h2>
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    onChange={handleChange}
                    value={formData.age}
                />
                <label htmlFor="breed">Breed</label>
                <input
                    id="breed"
                    name="breed"
                    onChange={handleChange}
                    value={formData.breed}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default PetForm