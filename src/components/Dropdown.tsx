import { useState, useRef, memo, useMemo, MouseEventHandler } from "react"
import { DropdownOption } from "@/types"
import useClickAway from "@/hooks/useClickAway"
import { Input, Icon, Button, Thumbnail } from "@/components"
import classNames from "classnames"
import "@/styles/components/_dropdown.scss"

type Props = {
	id: string
    options: DropdownOption[]
    label?: string
    value?: string | number
    onOptionSelect?: (optionVal: string | number) => void
}

export default function Dropdown(props: Props) {
	const defaultProps = { ...props, value: ""}
	const [dropdownValue, setDropdownValue] = useState(defaultProps.value)
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement | null>(null)
	useClickAway(dropdownRef, () => setDropdownOpen(false))

	const getSelectedOptionObj = ():DropdownOption | null => {
		const selectedOptionObj = props.options?.filter(
			option => option.value === dropdownValue
		)
		return selectedOptionObj ? selectedOptionObj[0] : null
	}
	const selectedObj: DropdownOption | null = getSelectedOptionObj()
	const labelDisplay: string | null = dropdownValue ? selectedObj?.label as string : props.label as string

	const openDropdown = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault()
		setDropdownOpen(!dropdownOpen)
	}

	const handleOptionClick = (evt: React.MouseEvent,selectedOptionValue: string) => {
		evt.preventDefault()
		setDropdownValue(selectedOptionValue)
		setDropdownOpen(false)

		if(props.onOptionSelect)
			props.onOptionSelect(selectedOptionValue)
	}

	const dropdownOptions = props.options.map((option, index) => {
		return (
			<button 
				key={index} 
				className={classNames("sd-dropdown-option", dropdownValue === option.value ? "sd-dropdown-option--active" : "")} 
				onClick={(evt) => handleOptionClick(evt, option.value as string)}
				disabled={option.disabled}>

				<div className="d-flex align-items-center gap-8">
					<Thumbnail 
						src={`avatar-${option.value}.jpeg`}
						alt={`Avatar of ${option.label}`}
						circle />
					<p>{ option.label }</p>
				</div>

				<div>
					<p>{ option.subLabel }</p>
				</div>
			</button>
		)
	}) 
    
	const renderDropdownMenu = () => {
		if (dropdownOpen) {
			return (
				<div className="sd-dropdown__list">
					<div className="sd-dropdown__list-block">
						<div className="sd-dropdown__list-content">
							{ dropdownOptions }
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<div ref={dropdownRef} className={classNames("sd-dropdown", dropdownOpen ? "sd-dropdown--open" : "")}>

			<button role="button" className="sd-dropdown__selector" onClick={(evt) => openDropdown(evt)}>
				<input type="hidden" value={dropdownValue} id={props.id} name={props.id} />
				<p className="sd-dropdown__label">{labelDisplay ? labelDisplay : "Select Option"}</p>
				<Icon
					ariaLabel="Open Dropdown"
					name="fa-solid fa-chevron-down"
					styleName="sd-dropdown__icon"
				/>
			</button>

			{renderDropdownMenu()}

		</div>
	)
}