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
    
const scoreUpdate = (i) => {
  console.log(i);

  let reset = false;

  arrList.map((val) => 
    {
    
      if(i === val.id) {
        if(val.isClicked)
        {
          reset = true;
        }
        else
        {
          reset = false;
        }
        val.isClicked = true
      }
      
      return i;
    }
  );


  if(score >= 10 || reset)
  {
    changeScore(0);
    reset = false;
    arrList.map((val) => {
      val.isClicked = false;
      return i;
    })
  }
  else
  {
    changeScore(score + 1);
  }
  
  if(score >= highScore)
  {
        highScoreChange(score);
  }
  console.log(arrList);
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
              <img src={value.src} alt={value.name} onClick={() => scoreUpdate(value.id)} value={index}/>
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