import { useState } from 'react'

function Bai1() {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  return (
    <>
    <h3>Bai 1</h3>
      <div>
        <input onChange={(e) => setName(e.target.value)} placeholder='Enter your name' type="text" />
        <button onClick={() => setText('Hello ' + `${name}`)}>Submit</button>
      </div>
      <span>{text}</span>
    </>
  )
}

export default Bai1;
