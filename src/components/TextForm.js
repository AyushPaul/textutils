import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uPPER Case !!","success")
    }
    const handleLowClick = () =>{
        // console.log("UpperCase was Clicked")
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lower Case !!","success")
    }
    const handleClearClick = () =>{
        // console.log("UpperCase was Clicked")
        // let newText = text.toLocaleLowerCase();
        setText("")
        props.showAlert("Cleared Text","danger")
    }
    const handleOnChange = (event) =>{
        // console.log("On Change")
        setText(event.target.value)
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Cleared Spaces","danger")
    }
    const [text,setText] = useState("")
    
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? '#5f6163' : 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode ==='dark'? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
