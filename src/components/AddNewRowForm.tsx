import { useState } from "react"
import { Row } from "@/models"
import { Input, Icon, Button } from "@/components"
import "@/styles/components/_form.scss"
import classNames from "classnames"

type Props = {
	id: string
	onSubmit: () => void
}

export default function AddNewRowForm(props: Props) {
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const handleSubmit = (evt: SubmitEvent) => {
		console.log("this is being submitted")
		evt.preventDefault()
		props.onSubmit()
	}

	const openDropdown = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault()
		setDropdownOpen(!dropdownOpen)
	}

	const renderDropdownMenu = () => {
		if (dropdownOpen) {
			return (
				<div className="sd-dropdown__list">
					<div className="sd-dropdown__list-block">
						<p className="label">Available Character(s)</p>

						<div className="sd-dropdown__list-content">

						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<form className="sd-form" id={props.id} onSubmit={() => handleSubmit}>

			<div className="sd-dropdown">

				<button role="button" className="sd-dropdown__selector" onClick={(evt) => openDropdown(evt)}>
					<p className="sd-dropdown__label">Select Character</p>
					<Icon
						ariaLabel="Open Dropdown Icon"
						name="fa-solid fa-chevron-down"
						styleName={classNames("sd-dropdown__icon", dropdownOpen ? "rotate-180" : "")}
					/>
				</button>

				{renderDropdownMenu()}

			</div>
		</form>
	)
}