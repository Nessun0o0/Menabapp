import React, {useState, useRef} from 'react';
import './App.css';
import Page from './Page';
import PDF from './pdf';


function App() {

  const [text,setText] = useState("Copertina\nRetro")
  const [pages, setPages] = useState([<div />, <Page className={"c-left"} title={"Copertina"} content={""}/>, <Page className={"c-right"} title={"Retro"} content={""}/>, <div />])
  const [counter, setCounter] = useState(1)
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
      if (lines[i][0] == "-") {
        continue
      }
      let content = ""
      if (lines[i+1] !== undefined && lines[i+1][0] === "-") {
        content = lines[i+1].slice(1)
      }
      array.push(<Page className={classNames[array.length % 4]} title={lines[i]} content={content}/>)
    }
    array.push(<div />)
    setPages(array)
    setCounter(Math.ceil(array.length/4))
  }

  const printHandler = () => {
    PDF(pdfRef, Math.ceil(pages.length/4))
  }

  return (
    <div className='container'>
      <textarea id='textArea' name='textArea' value={text} onChange={handleTextChange} placeholder='Add a new line to create a new page. Start a line with "-" to write the content of the page.'>    </textarea>
      <p className='counter'>{counter}</p>
      <button className={"print"} onClick={printHandler}>PDF</button>
      <div className={"grid"} ref={pdfRef}>
        {pages}
      </div>

    </div>
  );
}

export default App;
