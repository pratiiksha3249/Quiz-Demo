import React from 'react'
import './Quiz.css'
export default function Questionlist({ question, option, handleClick, currentAnswer }) {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {option.map((opt, index) => (
                    <li 
                        key={index} 
                        onClick={() => handleClick(opt)}
                        className={currentAnswer === opt ? 'selected' : ''}
                    >
                        {opt}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// import React from 'react'
// import './Quiz.css'


// export default function Questionlist({question,option,handleClick,CurrentAnswer}){
//     return(
//         <div>
//             <h2>{question}</h2>
//             <ul>
//                 {option.map((option,index)=>(
//                     <li key={index} onClick={()=>handleClick(option)} className={CurrentAnswer===Option ? 'selected':''}>{option}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
