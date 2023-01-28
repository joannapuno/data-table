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

	return (
		<div ref={wrapperRef} key={props.id} className={["sd-side-sheet", props.open ? "sd-side-sheet--open" : ""].join(" ")}>

			<div className="sd-side-sheet__content">{props.selectedRow?.character}</div>

		</div>
	);
}
