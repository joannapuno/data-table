import { Modal, AddNewRowForm } from "@/components"

type Props = {
    open: boolean
    onClose: (isOpen: boolean) => void
    onSubmit: () => void
}
export default function AddNewModal(props: Props) {
	return (
		<Modal open={props.open} onClose={(evt) => props.onClose(evt)}>
			<AddNewRowForm id="add-new-row" onSubmit={() => props.onSubmit()} />
		</Modal>
	)
}