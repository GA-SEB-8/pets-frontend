import React from 'react'
import { deletePet } from '../../../lib/api'

const PetDeleteButton = ({ petId, getAllPets }) => {
    console.log(petId)
    // Make the api call to delete the specific pet resource
    const handleDelete = async () => {
        await deletePet(petId)
        getAllPets()
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default PetDeleteButton
