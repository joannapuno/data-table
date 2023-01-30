import { useRef, useState, useEffect } from "react";
import { Row } from '@/models'
import "@/styles/components/_side-sheet.scss";

type Props = {
	id: string
	selectedRow?: Row
	open?: boolean;
	onClose: (val: boolean) => void;
};

export default function SideSheet(props: Props) {
	const [isOpen, setIsOpen] = useState(props.open);
	const wrapperRef = useRef(null);
	const selectedCharacter = props.selectedRow?.character.toLowerCase()

	// TODO: This could be better
	useEffect(() => {
		setIsOpen(props.open)

		const handleClickAway = (evt: Event) => {
			const el = evt.target as HTMLElement

			if(el.classList.contains('sd-side-sheet')) {
				setIsOpen(false)
				props.onClose(false)
			}
		}
    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
			setIsOpen(false)
    };
	}, [props.open, wrapperRef])

	const characterAvatar =  selectedCharacter ? <div className="sd-side-sheet__avatar"> <img src={`avatar-${selectedCharacter}.jpeg`} alt={`avatar for ${selectedCharacter}`} /></div> : null
	
	return (
		<div ref={wrapperRef} key={props.id} className={["sd-side-sheet", props.open ? "sd-side-sheet--open" : ""].join(" ")}>

			<div className="sd-side-sheet__content">
				<div className="sd-side-sheet__header">
					{ characterAvatar }
				</div>

				<div className="sd-side-sheet__main">
					<div className="sd-display-field">
						<p className="sd-display-field__label">Character</p>
						<p className="sd-display-field__value">{ props.selectedRow?.character }</p>
					</div>
					<div className="sd-display-field">
						<p className="sd-display-field__label">Element</p>
						<p className="sd-display-field__value">{ props.selectedRow?.element }</p>
					</div>
					<div className="sd-display-field">
						<p className="sd-display-field__label">Role</p>
						<p className="sd-display-field__value">{ props.selectedRow?.role }</p>
					</div>
					<div className="sd-display-field">
						<p className="sd-display-field__label">Level</p>
						<p className="sd-display-field__value">{ props.selectedRow?.level }</p>
					</div>
					<div className="sd-display-field">
						<p className="sd-display-field__label">Weapon</p>
						<p className="sd-display-field__value">{ props.selectedRow?.weapon }</p>
					</div>
					<div className="sd-display-field">
						<p className="sd-display-field__label">Artifact</p>
						<p className="sd-display-field__value">{ props.selectedRow?.artifactSet }</p>
					</div>
					<div className="sd-display-field">
						<p className="sd-display-field__label">Notes</p>
						<p className="sd-display-field__value">{ props.selectedRow?.notes }</p>
					</div>
				</div>
			</div>
		</div>
	);
}
