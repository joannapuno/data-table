import { MouseEventHandler } from 'react';
import '../../styles/components/smart-table.scss';

interface StringMap { [key: string]: string | number }

type Props = {
  columns?: StringMap[],
  rows?: StringMap[],
  addColumn: MouseEventHandler,
  addRow: MouseEventHandler
}

function SmartTable(props: Props) {
  const getRowKeys = (row: StringMap):string[] => {
    return Object.keys(row)
  }

  const headers = props.columns?.map((col, index) => {
    return (
      <th key={index}>
        <div className="sd-table-header">
          {col.headerName}
        </div>
      </th>
    )
  })

  const rowCells = (row: StringMap) => {
    return getRowKeys(row).map((field, index) => {
      return (
        <td key={index}>
          <div className="sd-table-cell">{row[field]}</div>
        </td>
      )
    })
  }

  const columnTrs = props.rows?.map((row, index) => {
    return (
      <tr key={index}>
        {rowCells(row)}
      </tr>
    )
  })



  return (
    <div className="sd-table">
      <table>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {columnTrs}
        </tbody>
      </table>

      <button className="sd-table__add-column" onClick={props.addColumn}>+</button>
      <button className="sd-table__add-row" onClick={props.addRow}>+</button>
    </div>
  )
}

export default SmartTable
