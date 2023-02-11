import { Column } from "@/types"
import { useSelector, useDispatch } from "react-redux"

export default function useTableData() {
	const dispatch = useDispatch()
	const hiddenColumns = ["id", "element", "weapon", "artifactSet"]
	const tableRows = useSelector((state: any) => state.table)
	const colKeys = Object.keys(Object.assign({}, ...tableRows))
	const tableColumns: Column[] = colKeys.map((colKey) => {
		return {
			field: colKey,
			headerTitle: colKey.charAt(0).toUpperCase() + colKey.slice(1),
			isShown: !hiddenColumns.includes(colKey) ?? true
		}
	})

	const handleRowDelete = (id: number) => {
		dispatch({
			type: "REMOVE_CHARA",
			payload: {
				id: id
			}
		})
	}

	const handleAddNew = (formData: FormData) => {
		const formJson = Object.fromEntries(formData.entries())
		dispatch({
			type: "ADD_CHARA",
			payload: {
				charac: {
					character: formJson["character-name"],
					role: formJson["character-role"],
					level: formJson["character-level"],
					notes: formJson["character-notes"],
				}
			}
		})
	}

	return {
		tableRows,
		tableColumns,
		hiddenColumns,
		handleRowDelete,
		handleAddNew
	}
}
