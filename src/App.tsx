import { useState } from 'react'
import { Table, SideSheet } from "@/components";
import './styles/app.scss'

type Row = { [key: string]: string | number };
const dummyData: Row[] = [
  {
    name: "Anya Foger",
    description: "Espaaa"
  },
  {
    name: "Kakarot",
    description: "Ricee"
  },
  {
    name: "Naruto Uzumaki",
    description: "Dattebayo"
  }
];


export default function App() {
  const [selectedRow, setSelectedRow] = useState<Row>()
  const [isOpen, setIsOpen] = useState(false)
  
  const handleRowClick = (row: Row) => {
    setSelectedRow(row)
    setIsOpen(true)
  }

  return (
    <div className="App">
      <SideSheet id="test" rowData={selectedRow} open={isOpen} onClose={(evt) => setIsOpen(evt)}/>
      <Table dataSet={dummyData} onRowClick={handleRowClick} />
    </div>
  );
}
