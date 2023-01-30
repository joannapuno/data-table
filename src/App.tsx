import { useState } from 'react'
import { Table, SideSheet, TitleBar } from "@/components";
import { Row, Column } from '@/models'
import './styles/app.scss'
import classNames from 'classnames';

const hiddenColumns = ['element', 'weapon', 'artifactSet']

const rows: Row[] = [
  {
    character: "Xiao",
    element: 'Anemo',
    role: 'DPS',
    level: 90,
    weapon: 'Primordial Jade Winged-Spear',
    artifactSet: ['Viridescent + Gladiator'],
    notes: 'My cinnamon roll UwU'
  },
  {
    character: "Jean",
    element: 'Anemo',
    role: 'Healer',
    level: 90,
    weapon: 'Favonious Sword',
    artifactSet: ['Viridescent + Gladiator'],
    notes: 'Big Sis'
  }, {
    character: "Albedo",
    element: 'Geo',
    role: 'Support',
    level: 90,
    weapon: 'Cinnabar Spindle',
    artifactSet: ['Opulent'], // TODO: make artifact type
    notes: 'Extra DMG <3'
  }, {
    character: "Fischl",
    element: 'Electro',
    role: 'Support',
    level: 90,
    weapon: 'Favonious Bow',
    artifactSet: ['Shimenawa + Thunder'],
    notes: 'Energy, extra DMG and reactions. Plus a bird'
  },
];

export default function App() {
  const [selectedRow, setSelectedRow] = useState<Row>()
  const [isOpen, setIsOpen] = useState(false)
  const [isFullwidth, setIsFullwidth] = useState(false)

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

  const toggleLayout = () => {
    console.log('Coming Soon :D')
  }

  return (
    <div className="App">

      <div className={classNames('sd-table-wrapper', 'px-24', isFullwidth ? 'sd-table-wrapper--full-width' : '')}>

        <TitleBar 
          styleName="py-16" 
          toggleWidth={() => setIsFullwidth(!isFullwidth)}
          toggleLayout={() => toggleLayout()} />

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
