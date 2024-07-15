import "./EmployeeForm.scss"
import { states } from "./unitedstates.js"

import LabeledInput from "../LabeledInput/LabeledInput.jsx"

function saveEmployee(e) {
    e.preventDefault()
}

function EmployeeForm() {
    return (
        <form id="employeeform">
            <h2>Create Employee</h2>
            <div>
                <LabeledInput inputID="firstname" text="First Name"/>
                <LabeledInput inputID="lastname" text="Last Name"/>
                <LabeledInput inputID="birthdate" text="Date of Birth" type="date"/>
                <LabeledInput inputID="startdate" text="Start Date" type="date"/>
                <fieldset>
                    <legend>Address</legend>
                    <LabeledInput inputID="street"/>
                    <LabeledInput inputID="city"/>
                    <LabeledInput inputID="state" type="select" options={states}/>
                    <LabeledInput inputID="zipcode" text="Zip Code" type="number"/>
                </fieldset>
                <LabeledInput inputID="department" type="select" options={["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]}/>
            </div>
            <button onClick={saveEmployee}>Save</button>
        </form>
    )
}

export default EmployeeForm