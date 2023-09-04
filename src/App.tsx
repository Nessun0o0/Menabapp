import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';

function App() {

  const [text,setText] = useState("")

  const handleTextChange = event => {
    setText(event.target.value)
    console.log(event.target.value)
  }

  const draw = (ctx, frameCount) => {
    /* resizeCanvasToDisplaySize(ctx.canvas) */
    ctx.fillStyle = "#FF0000"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  return (
    <div className='container'>
      <textarea id='text' name='text' value={text} onChange={handleTextChange}>  </textarea>
      <Canvas draw={draw} />
    </div>
  );
}

export default App;
