import { useState } from "react";
import { Menu, Button, SideSheet } from "@/components"
import { Row, Column } from '@/models'
import "../styles/components/table.scss";


type Props = {
  rows: Row[]
  columns: Column[]
  onRowClick: (row: Row) => void
}

export default function Table(props: Props) {
  const headerEls = props.columns.map((header, colIndex) => {
    if(!header.isShown) return
    return (
      <th key={`${header}__${colIndex}`}>
        <div className="sd-table--header">{header.headerTitle}</div>
      </th>
    );
  });

  const rowEls = props.rows.map((row, rowIndex) => {
    return (
      <tr 
        className="sd-table-row" 
        key={`sd-table-row--${rowIndex}`}>

        <td className="sd-table--menu">
          <div className="sd-table--cell">
            Avatar here
          </div>
        </td>

        {props.columns.map((col: Column, colIndex) => {
          if(!col.isShown) return
          return (
            <td key={colIndex} onClick={() => props.onRowClick(row)}>
              <div className="sd-table--cell">{ row[col.field as keyof Row] }</div>
            </td>
          );
        })}

        {/* MENU */}
        <td className="sd-table--menu">
          <div className="sd-table--cell">
            <Menu selectedRow={row} key={`menu--${rowIndex}`}/>
          </div>
        </td>

      </tr>
    );
  });


  return (
    <div className="sd-table">
      <table>
        <thead>
          <tr>
            {/* AVATAR */}
            <th className="sd-table--cell-avatar"></th>

            {headerEls}

            {/* MENU */}
            <th className="sd-table--menu"></th>
          </tr>
        </thead>
        <tbody>{rowEls}</tbody>
      </table>
    </div>
  );
}
