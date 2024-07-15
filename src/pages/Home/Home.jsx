import { Link } from "react-router-dom"

import "./Home.scss"

import EmployeeForm from "../../components/EmployeeForm/EmployeeForm.jsx"

function Home() {
    return (
        <main id="home">
            <Link to="/employee-list">View Current Employees</Link>
            <EmployeeForm/>
        </main>
    )
}

export default Home