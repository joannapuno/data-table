import classNames from 'classnames'
import '@/styles/components/_icon.scss'

type Props = {
    name: string,
    size?: string,
    styleName?: string
}

export default function Icon(props: Props) {
    const iconClasses = classNames(
        'sd-icon',
        props.name,
        props.size,
        props.styleName
    )
    return(
        <span className={iconClasses}></span>
    )
}