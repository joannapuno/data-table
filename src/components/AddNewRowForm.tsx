import { useState } from "react"
import { DropdownOption, Character } from "@/types"
import { Dropdown } from "@/components"
import "@/styles/components/_form.scss"
import classNames from "classnames"
import useTableData from "@/hooks/useTableData"
import useDropdownData from "@/hooks/useDropdownData"

type Props = {
	id: string
	onSubmit: () => void
}

export default function AddNewRowForm(props: Props) {
	const tableData = useTableData()
	const charactersList = useDropdownData()
	const [ allCharas ] = useState(charactersList.allCharactersList)

	const mappedCharacters = () => {
		const list: Character[] = []
		allCharas.map(charac => {
			const found = tableData.tableRows.find(row => row.character === charac.name)
			if(!found) list.push(charac)
		})
		return list
	}

	const availableCharacs = mappedCharacters()
	const characterOptions: DropdownOption[] = availableCharacs.map((row): DropdownOption => {
		return {
			label: row.name as string,
			subLabel: row.element as string,
			value: row.name?.toLowerCase()
		}
	})

	const handleSubmit = (evt: SubmitEvent) => {
		console.log("this is being submitted")
		evt.preventDefault()
		props.onSubmit()
	}

	const handleCharacterSelect = (val: string | number) => {
		console.log(val)
	}

	return (
		<form className="sd-form" id={props.id} onSubmit={() => handleSubmit}>
			<Dropdown label="Select Character" options={characterOptions} onOptionSelect={handleCharacterSelect} />
		</form>
	)
}