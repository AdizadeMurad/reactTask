import React from 'react'
import useCounter from '../hooks/useCounter'


function Task() {
const [Count,multiply,division] = useCounter()
  return (
  <div className='general'>
    <h1>Score</h1>
    <h2>Count : {Count}</h2>
    <button onClick={()=>multiply()}>increase</button>
    <button onClick={()=>division()}>decrease</button>

  </div>
  )
}

export default Task
