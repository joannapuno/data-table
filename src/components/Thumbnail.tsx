import React from "react"
import classNames from "classnames"
import { Icon } from "@/components"
import "@/styles/components/_thumbnail.scss"

type Props = {
    icon?: string
    src?: string
    alt?: string
    circle?: boolean
    styleName?: string
}


export default function Thumbnail(props: Props) {
    
	const thumbnailSource = () => {
		if(props.icon) return <Icon name={props.icon} styleName="sd-thumbnail-icon" ariaLabel={props.alt ? props.alt : "Thumbnail"} />
		else if(props.src) {
			return <img className="sd-thumbnail-img" src={props.src} alt={props.alt} />
		}
	}

	return (
		<div className={classNames("sd-thumbnail", props.styleName, props.circle ? "sd-thumbnail--circle" : "")}>
			{ thumbnailSource() }
		</div>
	)
}