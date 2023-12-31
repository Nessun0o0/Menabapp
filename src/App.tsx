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

          <div className={"prova"}>
            <Page className={"left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-left"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"c-right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            <Page className={"right"} title={"bella"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing "}/>
            
          </div>

    </div>
  );
}

export default App;
