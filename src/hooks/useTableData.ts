import { useEffect, useState } from "react"
import { Row, Column } from "@/types"

const useTableData = () => {
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

	const [tableRows, setTableRows] = useState(rows)
	const [colKeys] = useState(() => Object.keys(Object.assign({}, ...tableRows)))
	const tableColumns: Column[] = colKeys.map((colKey) => {
		return {
			field: colKey,
			headerTitle: colKey.charAt(0).toUpperCase() + colKey.slice(1),
			isShown: !hiddenColumns.includes(colKey) ?? true
		}
	})
	let allowAddCharacter = tableRows.length < 4

	const handleRowDelete = (rowId: number) => {
		setTableRows(tableRows.filter(row => row.id !== rowId))
		allowAddCharacter = true
	}

	// useEffect(() => {
	// 	setTableRows(tableRows)
	// 	// return () => {
			
	// 	// }
	// }, [rows])

	return {
		allowAddCharacter,
		hiddenColumns,
		tableRows,
		tableColumns,
		setTableRows,
		handleRowDelete
	}
}

export default useTableData