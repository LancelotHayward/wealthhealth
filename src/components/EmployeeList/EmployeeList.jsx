import { useMemo, useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { useTable } from "react-table";

import ColumnHeader from "../ColumnHeader/ColumnHeader.jsx"

import "./EmployeeList.scss"

function EmployeeList() {
    const [entriesCount, setEntriesCount] = useState(10)
    const [search, setSearch] = useState("")
    let storeData = useSelector((state) => state.list)
    if (storeData.length === 0) {
        storeData.push(["No data available in table"])
    }
    const entriesCountElement = (
        <select id="entriesCount" onChange={e => setEntriesCount(e.target.value)}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
        </select>
    )
    console.log(storeData)
    const data = useMemo(() => storeData, []);
    const columns = useMemo(() => [
      {
        Header: "First Name",
        accessor: "firstname",
      },
      {
        Header: "Last Name",
        accessor: "lastname",
      },
      {
        Header: "Start Date",
        accessor: "startdate",
      },
      {
        Header: "Birth Date",
        accessor: "birthdate",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "Zipcode",
        accessor: "zipcode",
      }
    ], [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
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
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList