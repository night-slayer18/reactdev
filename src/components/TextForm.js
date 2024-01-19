import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick = () =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleClear = () =>{
        setText('');
        props.showAlert("Text cleared","success")
    }
    
    return (
        <>
        <div className='container'>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' id="mybox" rows="8" onChange={handleOnChange} value={text} placeholder='Enter Message' style={{backgroundColor: props.mode==='dark'?'#0a58ca':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Message</button>
        </div>
        <div className="container my-2">
            <h2>Your Text summary</h2>
            <p>{text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length} words,{text.length} characters</p>
            <p>{text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length *0.008} Minutes to read if 125 wpm</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter Something to Preview'}</p>
        </div>
        </>
  )
}

TextForm.propTypes={
    heading: PropTypes.string,
}

TextForm.defaultProps={
    heading: 'Enter your text here'
}