import { useState, useRef } from 'react'
import { useDispatch } from "react-redux"

import { save } from "../../common/formSlice.js"
import LabeledInput from "../LabeledInput/LabeledInput.jsx"
import Modal from "../Modal/Modal.jsx"

import { states } from "../../common/unitedstates.js"
import "./EmployeeForm.scss"
import { fireEvent } from '@testing-library/react'


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
    function saveEmployee(e) {
        e.preventDefault()
        let error = false
        if (!firstname) {
            error = true
            setfirstname(false)
        }
        if (!lastname) {
            error = true
            setlastname(false)
        }
        if (!birthdate) {
            error = true
            setbirthdate(false)
        }
        if (!startdate) {
            error = true
            setstartdate(false)
        }
        if (!street) {
            error = true
            setstreet(false)
        }
        if (!city) {
            error = true
            setcity(false)
        }
        if (!zipcode) {
            error = true
            setzipcode(false)
        }
        
        if (!error) { 
            modal.current.showModal()
            setErrorMessage("")
            dispatch(save({
                firstname,
                lastname,
                startdate,
                department,
                birthdate,
                street,
                city,
                state: unitedstate,
                zipcode
            }))
        }
        else {
            setErrorMessage("Missing field(s)!")
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