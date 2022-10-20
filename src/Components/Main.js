import React from 'react'
import Cards from './Cards'
import {list} from './Data'
import './styles/main.css'

const Main = () => {

  return (
    <div className='container'>
      <Cards arr={list}/>
    </div>
  )
}

export default Main