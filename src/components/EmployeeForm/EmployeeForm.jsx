import { useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"

import { save } from "../../common/formSlice.js"
import LabeledInput from "../LabeledInput/LabeledInput.jsx"
import Modal from "../Modal/Modal.jsx"

import { states } from "../../common/unitedstates.js"
import "./EmployeeForm.scss"


function EmployeeForm() {
    //Input States
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [birthdate, setbirthdate] = useState("")
    const [startdate, setstartdate] = useState("")
    const [street, setstreet] = useState("")
    const [city, setcity] = useState("")
    const [zipcode, setzipcode] = useState("")
    const [department, setdepartment] = useState("")
    const [unitedstate, setunitedstate] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const modal = useRef(null)
    const dispatch = useDispatch()
    // const list  = useSelector((state) => state.list)
    function saveEmployee(e) {
        e.preventDefault()
        const data = {
            firstname,
            lastname,
            birthdate,
            startdate,
            street,
            city,
            state: unitedstate,
            zipcode,
            department
        }
        let error = false
        Object.keys(data).map(key => data[key]).forEach(field => {
            if (!field) {
                setErrorMessage("Missing field")
                error = true
            }
        })
        if (!error) {
            dispatch(save(data))
            modal.current.showModal()
            setErrorMessage("")
        }
    }
    return (
        <form id="employeeform">
            <h2>Create Employee</h2>
            <div>
                <div>
                    <LabeledInput inputID="firstname" text="First Name" state={firstname} setState={setfirstname}/>
                    <LabeledInput inputID="lastname" text="Last Name" state={lastname} setState={setlastname}/>
                    <LabeledInput inputID="birthdate" text="Date of Birth" type="date" state={birthdate} setState={setbirthdate}/>
                    <LabeledInput inputID="startdate" text="Start Date" type="date" state={startdate} setState={setstartdate}/>
                    <LabeledInput inputID="department" type="select" options={["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]} state={department} setState={setdepartment}/>
                </div>
                <fieldset>
                    <legend>Address</legend>
                    <LabeledInput inputID="street" state={street} setState={setstreet}/>
                    <LabeledInput inputID="city" state={city} setState={setcity}/>
                    <LabeledInput inputID="state" type="select" options={states.map(state => state.name)} state={unitedstate} setState={setunitedstate}/>
                    <LabeledInput inputID="zipcode" text="Zip Code" type="number" state={zipcode} setState={setzipcode}/>
                </fieldset>
            </div>
            <div id="error">{errorMessage}</div>
            <button onClick={saveEmployee}>Save</button>
            <Modal text="Employee Created!" reference={modal}/>
        </form>
    )
}

export default EmployeeForm