
import classNames from 'classnames'
import { Icon } from '@/components'
import '@/styles/components/_button.scss'

type Variants = 'primary' | 'neutral' | 'transparent'
type Props = {
    text?: string
    ariaLabel: string
    variant?: Variants
    children?: React.ReactNode
    circle?: boolean
    icon?: string
    handleClick?: () => void
}


export default function Button(props: Props) {
    const btnVariant = props.variant ? props.variant : 'neutral'
    const btnClasses = classNames(
        'sd-button', 
        `sd-button--${btnVariant}`, 
        props.circle ? 'sd-button--circle' : '',
        props.icon ? 'sd-button--icon' : ''
    )

    const btnChildren = () => {
        if(props.text) {
            return <span>{props.text}</span>
        } else if(props.icon) {
            return <Icon name={props.icon} />
        } else {
            return props.children
        }
    }

    return (
        <button
            aria-label={props.ariaLabel} 
            onClick={props.handleClick}
            className={btnClasses} 
            role="button">
                { btnChildren() }
        </button>
    )
}