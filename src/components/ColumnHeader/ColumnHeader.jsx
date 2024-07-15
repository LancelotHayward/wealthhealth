import "./ColumnHeader.scss"

function ColumnHeader({text, sorting}) {
    return (
        // TODO : Add aria labels?
        <th className={"columnheader " + sorting}>
            {text}
        </th>
    )
}

export default ColumnHeader