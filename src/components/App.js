import React, { useState } from 'react'
import ResourceList from './ResourceList'

const App = () => {
  const [resource, setResource] = useState('posts')
  let [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>To Dos</button>
        <br/>
        <button onClick={() => setCount(++count)}>+</button>
        <button onClick={() => setCount(--count)}>-</button>
      </div>
      <ResourceList resource={resource}/>
      <br/>
      {count}
    </div>
  )
}

export default App
