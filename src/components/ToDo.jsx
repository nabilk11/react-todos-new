import React from 'react'

export const ToDo = ({ todo }) => {
  return (
    <div className='card'>
    <div>
    <h3 className={todo.complete ? 'complete' : 'incomplete'}>{todo.task}</h3>
    {todo.complete ? <span className='complete-emo'>✅</span> : <span className='inc-emo'>⛔️</span> }

    </div>
          
    </div>
  )
}
 