import { ADD_CHARA } from "@/actions/actionTypes"
import { Row, Column } from "@/types"
import React from "react"
import { useSelector } from "react-redux"
import { Action } from "redux"

export default function useTableData() {
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

	return {
		tableRows,
		tableColumns,
		hiddenColumns,
	}
}
