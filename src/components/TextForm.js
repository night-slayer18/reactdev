import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
        setText(text.toUpperCase());
    }
    const handleLoClick = () =>{
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleClear = () =>{
        setText('');
    }
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange} value={text} placeholder='Enter Message'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Message</button>
        </div>
        <div className="container my-2">
            <h2>Your Text summary</h2>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{text.split(" ").length *0.008} Minutes to read if 125 wpm</p>
            <h2>Preview</h2>
            <p>{text}</p>
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