import { Button } from "@/components"
import { Row } from "@/models"
import { useState, useRef } from "react"
import useClickAway from "@/hooks/useClickAway"
import "../styles/components/_menu.scss"

type Props = {
    selectedRow?: Row
    handlePin?:() => void
    handleRemove?: () => void
}
export default function Menu(props: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef(null)

	useClickAway(menuRef, () => {
		setIsOpen(false)
	})

	const renderMenuList = () => {
		if(!isOpen) return null
		return (
			<div className="sd-menu__menulist">
				<button onClick={props.handlePin} className="sd-menu-item sd-menu-item--leading-icon">
					<span className="fa-solid fa-thumbtack"></span>
					<span>Pin</span>
				</button>
				<button onClick={props.handleRemove} className="sd-menu-item text-red-500">Remove</button>
			</div>
		)
	}
	return (
		<div ref={menuRef} className="sd-menu" role="menu">
			<Button 
				ariaLabel="Row menu toggle"
				icon="fa-solid fa-ellipsis-h" 
				handleClick={() => setIsOpen(!isOpen)} 
				variant="transparent">
			</Button>
        
			{ renderMenuList() }
           
		</div>
	)
}