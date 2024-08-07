import { useMemo, useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { useTable, useSortBy, useGlobalFilter } from "react-table";

import "./EmployeeList.scss"

function EmployeeList() {
    const [entriesCount, setEntriesCount] = useState(10)
    const storeData = useSelector((state) => state.list)
    const [data, setData] = useState(storeData)
    if (data.length > entriesCount) {
      setData(storeData.slice(0, entriesCount))
    }
    else if (data.length < entriesCount && storeData.length > data.length) {
      setData(storeData.slice(0, entriesCount))
    }
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
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, useSortBy)
    
    if (storeData.length === 0) {
        return (
          <p>No employee data to show</p>
        )
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
                    <input type="text" id="search" onChange={e => setGlobalFilter(e.target.value)}/>
                </div>
            </header>
            <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render("Header")}
                            <span>
                              {column.isSorted ? (column.isSortedDesc ? " v" : " ^") : ""}
                            </span>
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