import React, { useState } from 'react'

const App = () => {
  const [resource, setResource] = useState('posts')

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('to dos')}>To Dos</button>
      </div>
      {resource}
    </div>
  )
}

export default App
