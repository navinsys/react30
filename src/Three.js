import React, { useState } from 'react'

export default function Three() {
    const [input,setInput] = useState('');
  return (
    <div>
        <input type="text" onChange={(e) => setInput(e.target.value)}  />
        <p>User input: {input}</p>
      
    </div>
  )
}
