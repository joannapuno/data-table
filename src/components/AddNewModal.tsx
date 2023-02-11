import { Modal, AddNewRowForm } from "@/components"
import { useState } from "react"

type Props = {
    open: boolean
    onClose: (isOpen: boolean) => void
}
export default function AddNewModal(props: Props) {
	const [ isOpen, setIsOpen ] = useState(props.open)

	const handleOnSubmit = () => handleClose(true)

	const handleClose = (isOpen: boolean) => {
		setIsOpen(false)
		props.onClose(isOpen)
	}

	return (
		<Modal open={props.open} onClose={(evt) => handleClose(evt)}>
			<AddNewRowForm id="add-new-row" onSubmit={() => handleOnSubmit()} />
		</Modal>
	)
}