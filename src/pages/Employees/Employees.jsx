import { Link } from "react-router-dom"

import "./Employees.scss"

import EmployeeList from "../../components/EmployeeList/EmployeeList.jsx"

function Employees() {
    return (
        <main id="employees">
            <h2>Current Employees</h2>
            <EmployeeList/>
            <Link to="/">Home</Link>
        </main>
    )
}

export default Employees