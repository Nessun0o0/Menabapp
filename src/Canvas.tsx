
import { useRef, useEffect } from 'react';


function Canvas(props) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    
    ctx.fillStyle = "#FF0000"
    //ctx.fillRect(50, 50, 100, 100)
    ctx.fillText("bella", 50, 50)
  }, []);

  return <canvas ref={canvasRef} width={props.width} height={props.height}/>
}

export default Canvas
