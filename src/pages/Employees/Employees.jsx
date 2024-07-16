import { useEffect } from 'react'
import { Link } from "react-router-dom"

import EmployeeList from "../../components/EmployeeList/EmployeeList.jsx"

import "./Employees.scss"

function Employees() {
    useEffect(() => {
        document.title = "HRnet - Current Employees"
    })
    return (
        <main id="employees">
            <h2>Current Employees</h2>
            <EmployeeList/>
            <Link to="/">Home</Link>
        </main>
    )
}

export default Employees