import "./EmployeeList.scss"

import { useState } from 'react'

import ColumnHeader from "../ColumnHeader/ColumnHeader.jsx"

function EmployeeList() {
    const [entriesCount, setEntriesCount] = useState(10)
    const [search, setSearch] = useState("")
    const entriesCountElement = (
        <select id="entriesCount" onChange={e => setEntriesCount(e.target.value)}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
        </select>
    )
    return (
        <div id="employeelist">
            <header>
                <div>
                    Show {entriesCountElement} entries
                </div>
                <div>
                    <label htmlFor="search">Search:</label>
                    <input type="text" id="search" onChange={e => setSearch(e.target.value)}/>
                </div>
            </header>
            <table>
                <thead>
                    <tr>
                        <ColumnHeader text="First Name" sorting="ascending"/>
                        <ColumnHeader text="Last Name"/>
                        <ColumnHeader text="Start Date"/>
                        <ColumnHeader text="Department"/>
                        <ColumnHeader text="Date of Birth"/>
                        <ColumnHeader text="Street"/>
                        <ColumnHeader text="City"/>
                        <ColumnHeader text="State"/>
                        <ColumnHeader text="Zip Code"/>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="9">No data available in table</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList