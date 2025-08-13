import { useState } from "react"

const PetForm = () => {
    const [formData, setFormData] = useState({})
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    return(
        <div>
            <h2>Add Your Pet</h2>
            <form>
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
                
            </form>
        </div>
    )
}
export default PetForm