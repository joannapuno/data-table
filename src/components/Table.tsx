import { useState } from "react";
import Menu from "./Menu"
import "../styles/components/table.scss";

type Column = {
  field: string;
  headerName: string;
};

type Row = { [key: string]: string | number };

interface Props {
  dataSet: Row[];
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
      <tr key={`sd-table-row sd-table-row--${rowIndex}`}>
        {columns.map((col, colIndex) => {
          return (
            <td key={colIndex}>
              <div className="sd-table--cell">{row[col.field]}</div>
            </td>
          );
        })}

        {/* MENU */}
        <td className="sd-table--menu">
          <div className="sd-table--cell">
            <button className="sd-button sd-button--transparent">
              <span className="sd-icon fa-solid fa-ellipsis-h"></span>
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="sd-table">
      <Menu />
      <table>
        <thead>
          <tr>
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
