import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import SmartTable from './components/SmartTable/SmartTable'
import './styles/app.scss'

interface LooseObject {
  [key: string]: any
}

const defRows: LooseObject[] = [
  {
    name: 'Jem 1',
    description: 'Lorem ipsum 1',
  },
  {
    name: 'Jem 2',
    description: 'Lorem ipsum 2'
  },
  {
    name: 'Jem 3',
    description: 'Lorem ipsum 3',
  },
  {
    name: 'Jem 4',
    description: 'Lorem ipsum 4',
  },
  {
    name: 'Jem 5',
    description: 'Lorem ipsum 5',
  },
]
const columnKeys:string[] = Object.keys(Object.assign({}, ...defRows));

const defColumns: LooseObject[] = columnKeys.map(key => {
  return {
    field: key,
    headerName: key
  }
})

function App() {
  const [rows, setRows] = useState(defRows)
  const [columns, setColumns] = useState(defColumns)

  function handleAddRow(){
    console.log('row!')
  }

  function handleAddColumn(){
    setRows([])
  }

  return (
    <div className="App">
      <SmartTable 
        columns={columns} 
        rows={rows}
        addColumn={handleAddColumn}
        addRow={handleAddRow} />
    </div>
  )
}

export default App