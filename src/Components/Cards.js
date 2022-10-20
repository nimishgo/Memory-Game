import React, {useState, useEffect} from 'react'
import './styles/main.css'
import Scores from './Scores';


const Cards = ({arr}) => {

  const [score,changeScore] = useState(0);
  const [highScore, highScoreChange] = useState(0);
  const [arrList,changeArr] = useState(arr)

  const shuffle = (cardList) => {
    let len = cardList.length, randomIndex;
    
    while(len !== 0)
    {
      randomIndex = Math.floor(Math.random() * len);
      len--;
      
      [cardList[len], cardList[randomIndex]] = [
        cardList[randomIndex], cardList[len]];
        
      }
      changeArr(cardList);
    };
    
const scoreUpdate = () => {
  if(score >= 10)
  {
    changeScore(0);
  }
  else
  {
    changeScore(score + 1);

  }

  (score >= highScore && highScore < 10 && highScoreChange(score + 1));

}

    
  useEffect(() => {
    setTimeout(() => {
      shuffle(arrList)
    }, 1000)
  });

  return (
    <>
    <Scores score={score} highScore={highScore}/>
    <div className='cardContainer'>
      {
        arrList.map((value, index) => (
          <div className='cards' key={value.id}>
              <img src={value.src} alt={value.name} onClick={scoreUpdate} value={index}/>
              <div>{value.name}</div>
        </div>
      )
      )
    }
    </div>
    </>
  )
}

export default Cards