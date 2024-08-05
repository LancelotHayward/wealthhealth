import { useEffect } from "react"
import "./LabeledInput.scss"

function LabeledInput({inputID, text, type="text", options=[], state, setState}) {
    useEffect(() => {
        if (type === "select") {
            setState(options[0])
        }
    })
    if (!text) {
        text = inputID.charAt(0).toUpperCase() + inputID.slice(1)
    }
    function createInputOrSelect(type, inputID, options) {
        if (type !== "select") {
            return (
                <input className={(state === false) ? "error" : ""} type={type} id={inputID} onChange={e => setState(e.target.value)}/>
            )
        }
        return (
            <select name={inputID} id={inputID} onChange={e => setState(e.target.value)}>
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