import React, { useState } from 'react'
import ResourceList from './ResourceList'

const App = () => {
  const [resource, setResource] = useState('posts')
  let [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('to dos')}>To Dos</button>
        <br/>
        <button onClick={() => setCount(++count)}>+</button>
        <button onClick={() => setCount(--count)}>-</button>
      </div>
      {resource}
      <br/>
      {count}
      <ResourceList />
    </div>
  )
}

export default App
