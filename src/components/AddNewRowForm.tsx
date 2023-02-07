import React, { FormEvent } from "react"
import { DropdownOption  } from "@/types"
import { Dropdown, Button, Input } from "@/components"
import "@/styles/components/_form.scss"
import { useDispatch } from "react-redux"
import useDropdownData from "@/hooks/useDropdownData"

type Props = {
	id: string
	onSubmit: () => void
}

export default function AddNewRowForm(props: Props) {
	const { allCharactersList } = useDropdownData()
	const dispatch = useDispatch()

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