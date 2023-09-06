import React, {useState, useRef} from 'react';
import './App.css';
import Page from './Page';
import PDF from './pdf';


function App() {

  const [text,setText] = useState("#Copertina\n#Retro")
  const [pages, setPages] = useState([<div />, <Page className={"c-left"} title={"Copertina"} content={""}/>, <Page className={"c-right"} title={"Retro"} content={""}/>, <div />])
  const classNames = ["left", "c-left", "c-right", "right"]
  const pdfRef = useRef()

  const handleTextChange = event => {
    setText(event.target.value)
    textParser(event.target.value)
  }

  const textParser = (text: string) => {
    let lines = text.split("\n")
    let array = [<div />]
    for (let i = 0; i < lines.length; i++) {
      if (lines[i][0] == "#") {
        let content = ""
        if (lines[i+1] !== undefined && lines[i+1][0] !== "#") {
          content = lines[i+1]
        }
        array.push(<Page className={classNames[array.length % 4]} title={lines[i].slice(1)} content={content}/>)
      }
    }
    array.push(<div />)
    setPages(array)
  }

  const printHandler = () => {
    PDF(pdfRef, Math.ceil(pages.length/4))
  }

  return (
    <div className='container'>
      <textarea id='textArea' name='textArea' value={text} onChange={handleTextChange} placeholder='Start a line with "#" to create a new page'>    </textarea>
      <button className={"print"} onClick={printHandler}>PDF</button>
      <div className={"grid"} ref={pdfRef}>
        {pages}
      </div>

    </div>
  );
}

export default App;
