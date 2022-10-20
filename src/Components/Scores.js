import React from 'react'
import './styles/main.css'

const Scores = ({score,highScore}) => {
  return (
    <div className='scoreBoard'>  
    <div>Max. Score : 10</div>
    <div>Your Score : {score}</div>
    <div>Highest Score : {highScore}</div>
    {((score === 10 ) && <div>You Won 🎉 !</div>) }
    </div>
  )
}


export default Scores;