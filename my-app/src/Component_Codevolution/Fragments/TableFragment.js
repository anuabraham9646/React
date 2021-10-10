import React from 'react'
import ColumnFragment from "./ColumnFragment";
function TableFragment() {
    return (
        <table>
            <tbody>
                <tr>
                    <ColumnFragment/>
                </tr>
            </tbody>
        </table>
    )
}

export default TableFragment
