import "./EmployeeForm.scss"

import LabeledInput from "../LabeledInput/LabeledInput.jsx"

const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

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