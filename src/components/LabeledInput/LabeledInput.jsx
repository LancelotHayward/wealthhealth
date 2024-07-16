import { useState } from 'react'

import "./LabeledInput.scss"

function LabeledInput({inputID, text, type="text", options=[]}) {
    const [input, setInput] = useState("")
    // TODO : remove console log
    if (input) {
        console.log(input)
    }
    if (!text) {
        text = inputID.charAt(0).toUpperCase() + inputID.slice(1)
    }
    function createInputOrSelect(type, inputID, options) {
        if (type !== "select") {
            return (
                <input type={type} id={inputID} onChange={e => setInput(e.target.value)}/>
            )
        }
        return (
            <select name={inputID} id={inputID} onChange={e => setInput(e.target.value)}>
                {options.map(option => (<option key={option}>{option}</option>))}
            </select>
        )
    }
    return (
        <div className="labeledinput">
            <label htmlFor={inputID}>{text}</label>
            {createInputOrSelect(type, inputID, options)}
        </div>
    )
}

export default LabeledInput