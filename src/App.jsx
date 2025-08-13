import axios from 'axios'
import { useEffect, useState } from 'react'

import { ClipLoader } from 'react-spinners'

import PetForm from './components/PetForm/PetForm'
import PetList from './components/PetList/PetList'

const App = () => {

  const [formIsShown, setFormIsShown] = useState(false)

  const handleShowFormClick = () => {
    console.log('show form button is clicked')
    setFormIsShown(true)
  }

  return (
    <>
      <h1>Welcome to the pets app!</h1>
      <button onClick={handleShowFormClick}>Add Your Pet</button>
      {
        formIsShown
          ?
          <PetForm  setFormIsShown={setFormIsShown}/>
          :
          <PetList />
        // formIsShown && <PetForm />
      }

    </>
  )
}

export default App