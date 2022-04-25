import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from '../Components/NavBar'

function Home() {
  return (
    <div>
        <NavBar/>
        
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default Home