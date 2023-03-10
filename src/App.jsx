import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#3EB489').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)}
            placeholder="#ffffff"
            className={`${error ? 'error' : null}`} />
          <button className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>
          {list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} hexColor={color}/>
          })}
        </h4>
      </section>
    </>
  )
}

export default App