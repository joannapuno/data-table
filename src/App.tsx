import { useState } from "react"
import { Table, SideSheet, TitleBar, AddNewModal, Button, EmptyTable } from "@/components"
import { Row } from "@/types"
import useTableData from "@/hooks/useTableData"
import classNames from "classnames"
import "./styles/app.scss"

export default function App() {
	const { tableRows, tableColumns, handleRowDelete } = useTableData()
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

	const renderAddCharacButton = () => {
		return (
			<Button 
				styleName="my-16" 
				text="Add character" 
				ariaLabel="Add character" 
				handleClick={() => setIsAddNewModal(true)} />
		)
	}

	const renderPage = () => {
		if(!tableRows.length) {
			return (
				<EmptyTable>
					{renderAddCharacButton()}
				</EmptyTable>
			)
		} else {
			return (
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
						rows={tableRows} 
						columns={tableColumns} 
						onRowClick={handleRowClick}
						handleRowDelete={(evt) => handleRowDelete(evt)} />
          
					{renderAddCharacButton()}
				</div>
			)
		}
	}
  
	return (
		<div className="App">
			{ renderPage() }
			<AddNewModal 
				open={isAddNewModal}
				onClose={() => setIsAddNewModal(false)} />
		</div>
	)
}
