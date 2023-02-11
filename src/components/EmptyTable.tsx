import EmptyStateImg from "@/assets/empty-table.svg"
import "@/styles/components/_empty-table.scss"

interface Props {
    title?: string
    bodyText?: string
    children?: React.ReactNode
}

export default function EmptyTable(props: Props) {
	const defaultProps = {
		title: props.title ? props.title : "Much Emptiness",
		bodyText: props.bodyText ? props.bodyText : "There are currently no characters in your party."
	}

	const renderActionButton = () => {
		if(!props.children) return null
		return props.children
	}
	return (
		<div className="sd-empty-table">
			<div className="sd-empty-table__content">
				<div className="sd-empty-table__img">
					<img src={EmptyStateImg} alt="Table is empty. Add new" />
				</div>
				<div className="sd-empty-table__text">
					<h5 className="text-lg-bold mb-8">{ defaultProps.title }</h5>
					<p className="text-md-regular">{ defaultProps.bodyText }</p>
				</div>

				<div className="sd-empty-table__action-btn">{renderActionButton()}</div>
			</div>
		</div>
	)
}