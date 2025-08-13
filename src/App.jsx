import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const getAllPets = async () => {
    // const url = 'http://localhost:3000/pets/'
    console.log(import.meta.env.VITE_BACKEND_URL)
    const url = `${import.meta.env.VITE_BACKEND_URL}/pets`
    const response = await axios.get(url)
    console.log(response)
  }

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <>
      <h1>Welcome to the pets app!</h1>
    </>
  )
}

export default App