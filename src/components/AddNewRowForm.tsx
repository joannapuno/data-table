import React from "react"
import { DropdownOption  } from "@/types"
import { Dropdown, Button, Input } from "@/components"
import "@/styles/components/_form.scss"
import useDropdownData from "@/hooks/useDropdownData"
import useTableData from "@/hooks/useTableData"

type Props = {
	id: string
	onSubmit: () => void
}

export default function AddNewRowForm(props: Props) {
	const { allCharactersList } = useDropdownData()
	const { handleAddNew } = useTableData()

	const characterOptions: DropdownOption[] = allCharactersList.map((row): DropdownOption => {
		return {
			label: row.name as string,
			subLabel: row.element as string,
			value: row.name?.toLowerCase()
		}
	})

	const handleSubmit = (evt: React.FormEvent) => {
		evt.preventDefault()
		const form = evt.currentTarget as HTMLFormElement
		const formData = new FormData(form)
		handleAddNew(formData)
		props.onSubmit()
	}

	return (
		<form className="sd-form add-new-form" id={props.id} onSubmit={(evt: React.FormEvent) => handleSubmit(evt)}>
			<Dropdown 
				id="character-name" 
				label="Select Character" 
				options={characterOptions} />

			<Input 
				label="Role" 
				id="character-role" />

			<Input 
				label="Level"
				type="number" 
				id="character-level" />

			<Input 
				label="Notes" 
				id="character-notes" />

			<Button text="Add" ariaLabel="Add Character" type="submit" />
		</form>
	)
}