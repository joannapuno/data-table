import { useState } from "react"
import { Table, SideSheet, TitleBar, AddNewModal, Button, AddNewRowForm } from "@/components"
import { Row, Column } from "@/types"
import useTableData from "@/hooks/useTableData"
import "./styles/app.scss"
import classNames from "classnames"

const hiddenColumns = ["id", "element", "weapon", "artifactSet"]

const rows: Row[] = [
	{
		id: 1,
		character: "Xiao",
		element: "Anemo",
		role: "DPS",
		level: 90,
		weapon: "Primordial Jade Winged-Spear",
		artifactSet: ["Viridescent + Gladiator"],
		notes: "Glass cannon"
	},
	{
		id: 12,
		character: "Jean",
		element: "Anemo",
		role: "Healer",
		level: 90,
		weapon: "Favonious Sword",
		artifactSet: ["Viridescent + Gladiator"],
		notes: "Battery for Xiao plus a great healer"
	}, 
	{
		id: 13,
		character: "Albedo",
		element: "Geo",
		role: "Support",
		level: 90,
		weapon: "Cinnabar Spindle",
		artifactSet: ["Opulent"], // TODO: make artifact type
		notes: "Extra DMG and bonus shield with elemental reactions"
	}, 
	{
		id: 14,
		character: "Fischl",
		element: "Electro",
		role: "Support",
		level: 90,
		weapon: "Favonious Bow",
		artifactSet: ["Shimenawa + Thunder"],
		notes: "Extra energy, extra DMG and reactions"
	},
]

export default function App() {
	const tableData = useTableData()
	const [selectedRow, setSelectedRow] = useState<Row>()
	const [isOpen, setIsOpen] = useState(false)
	const [isFullwidth, setIsFullwidth] = useState(false)
	const [isAddNewModal, setIsAddNewModal] = useState(false)

	const handleRowClick = (row: Row) => {
		setSelectedRow(row)
		setIsOpen(true)
	}

	const toggleLayout = () => {
		console.log("Coming Soon :D")
	}

	const onSubmitForm = () => {
		setIsAddNewModal(true)
	}

	const renderAddCharacButton = () => {
		if(tableData.allowAddCharacter) {
			return (
				<Button 
					styleName="my-16" 
					text="Add character" 
					ariaLabel="Add character" 
					handleClick={() => setIsAddNewModal(true)} />
			)
		}
	}
  
	return (
		<div className="App">

			<div className={classNames("sd-table-wrapper", "px-24", isFullwidth ? "sd-table-wrapper--full-width" : "")}>
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
					rows={tableData.tableRows} 
					columns={tableData.tableColumns} 
					onRowClick={handleRowClick}
					handleRowDelete={tableData.handleRowDelete} />
          
				{ renderAddCharacButton() }

				<AddNewModal 
					open={isAddNewModal}
					onClose={() => setIsAddNewModal(false)}
					onSubmit={onSubmitForm} />
        
			</div>
		</div>
	)
}
