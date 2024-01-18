import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleOnClick = () =>{
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange} value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
        </div>
  )
}

TextForm.propTypes={
    heading: PropTypes.string,
}

TextForm.defaultProps={
    heading: 'Enter your text here'
}