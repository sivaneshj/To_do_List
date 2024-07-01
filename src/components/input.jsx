import React from 'react'

function input({data,func,todo}) {
  return (
    <>
    <input id="text" onChange={func} value={data} placeholder="Enter the list" type="text"/>
    <button onClick={todo} id="check">+</button>
    </>
  )
}

export default input