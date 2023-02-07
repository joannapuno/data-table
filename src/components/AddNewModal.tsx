import { Modal, AddNewRowForm } from "@/components"
import { useState } from "react"

type Props = {
    open: boolean
    onClose: (isOpen: boolean) => void
    onSubmit: () => void
}
export default function AddNewModal(props: Props) {
	const [ isOpen, setIsOpen ] = useState(props.open)

	const handleOnSubmit = () => {
		props.onSubmit()
		setIsOpen(false)
	}
	return (
		<Modal open={props.open} onClose={(evt) => props.onClose(evt)}>
			<AddNewRowForm id="add-new-row" onSubmit={() => handleOnSubmit()} />
		</Modal>
	)
}