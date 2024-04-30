import React, { useState } from 'react'
import './Navbar.css'
import { Chevron } from './Icons'
import Data from './Data'
import Card from './Card'

function Main() {
    const [show, setShow] = useState(true)
    // const card= Data.map((item)=>{
    //   return(
    //     <Card
    //     key= {item.id}
    //     item ={item}/>
    //   )
    // })
  return (
    <div className='main'>
      <input type="text" className="text" placeholder= 'Search for people'/>
      <p className='para'>In meeting</p>
      <div>
        <div className='chevron'>
            <p>Contributors</p>
            <button onClick={()=>setShow(!show)}><Chevron/></button>
        </div>
        {
            show?<Card/>:null
        }
      </div>
    </div>
  )
}

export default Main
