import { useState } from 'react'
import { Table, SideSheet, TitleBar } from "@/components";
import { Row, Column } from '@/models'
import './styles/app.scss'

const hiddenColumns = ['element', 'weapon', 'artifactSet']

const rows: Row[] = [
  {
    character: "Xiao",
    element: 'anemo',
    role: 'DPS',
    level: 90,
    weapon: '',
    artifactSet: ['artifact', 'artifact'],
    notes: 'space + jump, my best boi UwU'
  },
  {
    character: "Jean",
    element: 'anemo',
    role: 'Healer',
    level: 90,
    weapon: '',
    artifactSet: ['artifact', 'artifact'],
    notes: 'Big Sis'
  }, {
    character: "Albedo",
    element: 'geo',
    role: 'support',
    level: 90,
    weapon: '',
    artifactSet: ['artifact', 'artifact'], // TODO: make artifact type
    notes: 'Extra DMG <3'
  }, {
    character: "Fischl",
    element: 'electro',
    role: 'support',
    level: 90,
    weapon: '',
    artifactSet: ['artifact', 'artifact'],
    notes: 'Energy, extra DMG and reactions. Plus a bird'
  },
];

export default function App() {
  const [selectedRow, setSelectedRow] = useState<Row>()
  const [isOpen, setIsOpen] = useState(false)

  const [colKeys] = useState(() =>
    Object.keys(Object.assign({}, ...rows))
  );

  const columns: Column[] = colKeys.map((colKey) => {
    return {
      field: colKey,
      headerTitle: colKey.charAt(0).toUpperCase() + colKey.slice(1),
      isShown: !hiddenColumns.includes(colKey) ?? true 
    };
  });
  
  const handleRowClick = (row: Row) => {
    setSelectedRow(row)
    setIsOpen(true)
  }

  return (
    <div className="App">
      <TitleBar styleName="px-24" />

      <div className="genshin-party-container px-24">

        {/* TODO: Move in table */}
        <SideSheet 
          id="test" 
          selectedRow={selectedRow} 
          open={isOpen} 
          onClose={(evt) => setIsOpen(evt)} />

        <Table 
          rows={rows} 
          columns={columns} 
          onRowClick={handleRowClick} />
      </div>
    </div>
  );
}
