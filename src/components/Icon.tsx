import classNames from "classnames"
import "@/styles/components/_icon.scss"

type Props = {
    name: string,
    ariaLabel: string
    size?: string,
    styleName?: string
}

export default function Icon(props: Props) {
	const iconClasses = classNames(
		"sd-icon",
		props.size,
		props.styleName
	)
	return(
		<div className={iconClasses}>
			<span className={props.name} aria-label={props.ariaLabel}></span>
		</div>
	)
}