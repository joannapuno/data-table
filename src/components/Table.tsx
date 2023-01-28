import { useState } from "react";
import { Menu, Button, SideSheet } from "@/components"
import "../styles/components/table.scss";

type Column = {
  field: string;
  headerName: string;
};

type Row = { [key: string]: string | number };

type Props = {
  dataSet: Row[];
  onRowClick: (row: Row) => void
}

export default function Table(props: Props) {
  const [colKeys] = useState(() =>
    Object.keys(Object.assign({}, ...props.dataSet))
  );

  const [rows] = useState(props.dataSet);

  const columns: Column[] = colKeys.map((colKey) => {
    return {
      field: colKey,
      headerName: colKey.toUpperCase() //TODO:
    };
  });

  const headerEls = columns.map((header, colIndex) => {
    return (
      <th key={`${header}__${colIndex}`}>
        <div className="sd-table--header">{header.headerName}</div>
      </th>
    );
  });

  const rowEls = rows.map((row, rowIndex) => {
    return (
      <tr 
        className="sd-table-row" 
        key={`sd-table-row--${rowIndex}`}>

        {/* MENU */}
        <td className="sd-table--menu">
          <div className="sd-table--cell">
            <Menu selectedRow={row} key={`menu--${rowIndex}`}/>
          </div>
        </td>

        {columns.map((col, colIndex) => {
          return (
            <td key={colIndex} onClick={() => props.onRowClick(row)}>
              <div className="sd-table--cell">{row[col.field]}</div>
            </td>
          );
        })}

      </tr>
    );
  });


  return (
    <div>
      <div className="sd-table">
        <table>
          <thead>
            <tr>
              {/* MENU */}
              <th className="sd-table--menu"></th>
              {headerEls}
            </tr>
          </thead>
          <tbody>{rowEls}</tbody>
        </table>
      </div>
    </div>
  );
}
