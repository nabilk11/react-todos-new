import React from 'react'

export const ToDo = ({ todo }) => {
  return (
    <div className='card'>
    <h1>Task: {todo.task}</h1>
    {todo.complete ? <p className='complete-emo'>✅</p> : <p className='inc-emo'>⛔️</p> }
          
    
    
    </div>
  )
}
 