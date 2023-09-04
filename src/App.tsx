import React, {useState, useEffect} from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';

function App() {

  const [text,setText] = useState("")

  const handleTextChange = event => {
    setText(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className='container'>
      <textarea id='text' name='text' value={text} onChange={handleTextChange}>  </textarea>
      <TransformWrapper>
        <TransformComponent>
          <img src={logo} alt='test' className='prova'></img>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default App;
