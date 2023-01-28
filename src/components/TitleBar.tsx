import classNames from "classnames"

type Props = {
    styleName?:string
}

export default function TitleBar(props: Props) {
    return (
        <div className={classNames('sd-title-bar', props.styleName)}>
            <div className="d-flex">
                <div className="sd-thumbnail"></div>
                <p>Main Party</p>
            </div>
        </div>
    )
}