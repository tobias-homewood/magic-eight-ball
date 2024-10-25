import React, { useState } from 'react'

export default function Eightball({answers}) {
    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black');

    const ask = () => {
        const {msg, color} = answers[Math.floor(Math.random() * answers.length)]; // for example: {msg: "It is certain.", color: "green"}
        setMsg(msg);
        setColor(color);
    }

  return (
    <button onClick={ask}>
      {msg}
    </button>
  )
}