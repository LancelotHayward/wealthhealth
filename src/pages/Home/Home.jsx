// import { useEffect } from 'react'
import { Link } from "react-router-dom"

import EmployeeForm from "../../components/EmployeeForm/EmployeeForm.jsx"

import "./Home.scss"

function Home() {
    // useEffect(() => {
    //     document.title = "HRnet"
    // })
    return (
        <main id="home">
            <Link to="/employees">View Current Employees</Link>
            <EmployeeForm/>
        </main>
    )
}

export default Home