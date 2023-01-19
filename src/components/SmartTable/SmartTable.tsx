function SmartTable() {
  // const [count, setCount] = useState(0)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 10
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 10
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 10
    },
  ] 

  const rows = [
    {
      id: 1,
      name: 'Jem 1',
      description: 'Lorem ipsum 1'
    },
    {
      id: 2,
      name: 'Jem 2',
      description: 'Lorem ipsum 2'
    },
    {
      id: 3,
      name: 'Jem 3',
      description: 'Lorem ipsum 3'
    },
    {
      id: 4,
      name: 'Jem 4',
      description: 'Lorem ipsum 4'
    },
    {
      id: 1,
      name: 'Jem 1',
      description: 'Lorem ipsum 5'
    },
  ]

  const columnTds = columns.map((col) => {
    return (
      <th key={col.field}>
        <div className="sd-table-header">
          {col.headerName}
        </div>
      </th>
    )
  })
  const columnTrs = rows.map(( { id, name, description } ) => {
    return (
      <tr key={id}>
        <td>
          <div className="sd-table-cell">
            {id}
          </div>
        </td>
        <td>
          <div className="sd-table-cell">
            {name}
          </div>
        </td>
        <td>
          <div className="sd-table-cell">
            {description}
          </div>
        </td>
        
      </tr>
    )
  })

  return (
    <div className="sd-table">
      <div className="sd-table__options"></div>

      <table>
        <thead>
          <tr>
            {columnTds}
          </tr>
        </thead>
        <tbody>
          {columnTrs}
        </tbody>
      </table>

      <div className="sd-table__add-column"></div>
      <div className="sd-table__add-row"></div>
    </div>
  )
}

export default SmartTable
