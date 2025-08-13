import { useState } from "react"
import axios from "axios"

import { DotLoader } from "react-spinners"
import { create } from '../../../lib/api'

const PetForm = ({ setFormIsShown }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: ''
    })

    const handleChange = (event) => {
        if (event.target.name === 'age') {
            // do something in here
        }
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (isSubmitting) return
        setIsSubmitting(true)
        //console.log formData
        
        const response = await create(formData)
        console.log(response)
        if (response.status === 201) {
            setFormIsShown(false)
        }
        setIsSubmitting(false)
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
                    type='number'
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

                {
                    isSubmitting
                        ?
                        <DotLoader />
                        :
                        <button type="submit">Submit</button>
                }
            </form>
        </div>
    )
}
export default PetForm