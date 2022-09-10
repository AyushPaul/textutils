import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        // console.log("UpperCase was Clicked")
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        // console.log("UpperCase was Clicked")
        // let newText = text.toLocaleLowerCase();
        setText("")
    }
    const handleOnChange = (event) =>{
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text,setText] = useState("")
    
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
