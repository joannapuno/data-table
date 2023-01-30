import React,{ useState } from "react";
import { Menu, Thumbnail, SideSheet } from "@/components"
import { Row, Column } from '@/models'
import "../styles/components/table.scss";


type Props = {
  rows: Row[]
  columns: Column[]
  onRowClick: (row: Row) => void
}

export default function Table(props: Props) {
  const getCharacterAvatar = (characterName: string) => {
    const lowerCase = characterName.toLocaleLowerCase()
    return (
      <td className="sd-table--cell sd-table--menu">
        <Thumbnail styleName="mx-auto" src={`avatar-${lowerCase}.jpeg`} circle />
      </td>
    )
  }

  const headerEls = props.columns.map((header, colIndex) => {
    if(!header.isShown) return
    return (
      <th className="sd-table--header" key={`${header}__${colIndex}`}>
        {header.headerTitle}
      </th>
    );
  });

  const rowEls = props.rows.map((row, rowIndex) => {
    return (
      <tr 
        className="sd-table-row" 
        key={`sd-table-row--${rowIndex}`}>

        { getCharacterAvatar(row.character) }

        {props.columns.map((col: Column, colIndex) => {
          if(!col.isShown) return
          return (
            <td className="sd-table--cell" key={colIndex} onClick={() => props.onRowClick(row)}>
              { row[col.field as keyof Row] }
            </td>
          );
        })}

        {/* MENU */}
        <td className="sd-table--cell sd-table--menu">
          <Menu selectedRow={row} key={`menu--${rowIndex}`}/>
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
