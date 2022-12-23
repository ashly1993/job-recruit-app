import React from 'react'
import GIF from '../Images/gif.gif'
import './UnderConstruction.css'
import { useNavigate } from 'react-router'

function UnderConstruction() {
    const navigate = useNavigate()
  return (
    <div className='underConstruction'>
        <button onClick={()=>{
            navigate("/")
        }}>Back To</button>
        <img src={GIF} alt="GIF" />
    </div>
  )
}

export default UnderConstruction
