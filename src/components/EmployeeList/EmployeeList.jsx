import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import ColumnHeader from "../ColumnHeader/ColumnHeader.jsx"

import "./EmployeeList.scss"

function EmployeeList() {
    // useEffect(() => {
    //     let tableData
    // })
    const [entriesCount, setEntriesCount] = useState(10)
    const [search, setSearch] = useState("")
    // const [data, setData] = useState(tableData)
    const list  = useSelector((state) => state.list)
    // if (data.length === 0) {
    //     setData([["No data available in table"]])
    //     const tableData = list.map(employee => Object.keys(employee).map(key => employee[key]))
    //     console.log(tableData)
    //     if (tableData) {  
    //         setData(tableData)
    //     }
    // }
    const data = list.map(employee => Object.keys(employee).map(key => employee[key]))
    if (data.length === 0) {
        data.push(["No data available in table"])
    }
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
                    {data.map(line => {
                        return (<tr key={line[0]}>{line.map(field => {
                            return (<td key={field}>{field}</td>)
                        })}</tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList