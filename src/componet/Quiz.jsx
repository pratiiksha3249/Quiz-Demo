import React, { useState } from 'react'
import Questionlist from './Questionlist'
import './Quiz.css'

const Quiz = () => {
    const question=[
        {
            question:"what is react ?",
            option:['css Framework','react-library','react-framework','testing tool'],
            answer:"react-library"
        },
        {
            question:' what is 2+2 ?',
            option:['5','7','33','4'],
            answer:"4"
        },
        {
            question:" what is 10+10?",
            option:['27','76','20','6'],
            answer:'20'
        }
    ]
    const [currentQuestionIndex,setCurrentQuestion]=useState(0);
    const [currentAnswer,SetCurrentAnwer]=useState(null);
    const [score,Setscore]=useState(0);
    
    const handleClick=(option)=>{
         SetCurrentAnwer(option);
         if(option===question[currentQuestionIndex].answer){
            Setscore(score+1);
         }
    }
    const handleNextQue =()=>{
        setCurrentQuestion(currentQuestionIndex + 1);
        SetCurrentAnwer(null);
    }
  return (
    <div>
        {currentQuestionIndex<question.length ? <center><div>
        <Questionlist question={question[currentQuestionIndex].question}
        option={question[currentQuestionIndex].option} handleClick={handleClick}currentAnswer={currentAnswer}></Questionlist>
        <button disabled={currentAnswer===null} className={currentAnswer===null ?'button-disable':'button'}onClick={handleNextQue}>Next Question</button>
     </div></center> :<center><div><h2>Your Score is :{score}</h2></div></center> }
     
    </div>
  )
}

export default Quiz
