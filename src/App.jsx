import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

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
    <>
      <h1>Welcome to the pets app!</h1>
      <ol>
        {
          pets.length
            ?
            pets.map(pet => {
              return <p>{pet.name}</p>
            })
            :
            <p>Loading Pets</p>
        }
      </ol>
    </>
  )
}

export default App