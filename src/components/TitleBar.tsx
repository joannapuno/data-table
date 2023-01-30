import classNames from "classnames"
import { Button } from '@/components'
import '@/styles/components/_title-bar.scss'

type Props = {
    styleName?:string
    toggleWidth: () => void
    toggleLayout: () => void
}

export default function TitleBar(props: Props) {
    return (
        <div className={classNames('sd-title-bar', props.styleName)}>
            <div className="d-flex align-items-center gap-16">
                {/* <Thumbnail src="https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80" alt="Duck representing avatar" /> */}
                <h1>Main Party</h1>
            </div>

            <div className="d-flex align-items-center gap-16">
                <Button
                    ariaLabel="Card view" 
                    icon="fa-solid fa-border-all"
                    circle
                    title="Toggle View Layout"
                    handleClick={props.toggleLayout} />
                <Button 
                    ariaLabel="Full width"
                    icon="fa-solid fa-arrows-left-right"
                    circle
                    title="Toggle Width"
                    handleClick={props.toggleWidth} />
            </div>
        </div>
    )
}