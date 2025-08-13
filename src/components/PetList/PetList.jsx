import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const PetList = () => {
    const [pets, setPets] = useState([])

    const getAllPets = async () => {
        // const url = 'http://localhost:3000/pets/'
        console.log(import.meta.env.VITE_BACKEND_URL)
        const url = `${import.meta.env.VITE_BACKEND_URL}/pets`
        const response = await axios.get(url)
        console.log(response)
        setPets(response.data)
    }

    useEffect(() => {
        getAllPets()
    }, [])

    return (
        <div>
            <ol>
                {
                    pets.length
                        ?
                        pets.map(pet => {
                            return <p>{pet.name}</p>
                        })
                        :
                        <ClipLoader
                            color='#FF00FF'
                        />
                }
            </ol>
        </div>
    )
}

export default PetList
