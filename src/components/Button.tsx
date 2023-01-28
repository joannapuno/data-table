
import classNames from 'classnames'
import '@/styles/components/_button.scss'

type Variants = 'primary' | 'neutral' | 'transparent'
type Props = {
    text?: string,
    variant?: Variants,
    children?: React.ReactNode,
    handleClick?: () => void
}


export default function Button(props: Props) {
    const btnVariant = props.variant ? props.variant : 'neutral'
    const btnClasses = [
        `sd-button--${btnVariant}`,
        classNames({
            'sd-button': true
        })
    ]
    return (
        <button 
            onClick={props.handleClick}
            className={btnClasses.join(' ')} 
            role="button">
                { props.children }
        </button>
    )
}