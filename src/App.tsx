import React, {useState, useEffect} from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import Page from './Page';

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
          <div className={"prova"}>
            <Page title={"bella"} content={"ecco qua vediamo se funziona"}/>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default App;
