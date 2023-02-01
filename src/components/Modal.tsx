import React, { useRef, useState, useEffect } from 'react'
import { Button } from '@/components'
import '@/styles/components/_modal.scss'
import classNames from 'classnames'

type Props = {
    open?: boolean,
    children?:React.ReactNode
    onClose: (isClose: boolean) => void
}

export default function Modal(props: Props) {
    const modalRef = useRef(null)
    const [isOpen, setIsOpen] = useState(props.open)
    const modalClasses = classNames('sd-modal', props.open ? 'sd-modal--open' : '')

    const closeModal = () => {
        setIsOpen(false)
        props.onClose(false)
    }

    // TODO: This could be better
	useEffect(() => {
		setIsOpen(props.open)

		const handleClickAway = (evt: Event) => {
			const el = evt.target as HTMLElement

			if(el.classList.contains('sd-modal')) {
				setIsOpen(false)
				props.onClose(false)
			}
		}
        document.addEventListener("mousedown", handleClickAway);

        return () => {
            document.removeEventListener("mousedown", handleClickAway);
            setIsOpen(false)
        };
	}, [props.open, modalRef])
    
    return (
        <div ref={modalRef} className={modalClasses}>
            <div className="sd-modal__block">
                <div className="sd-modal__top-bar"></div>

                <div className="sd-modal__content">
                   { props.children }
                </div>

                <div className="sd-modal__action-bar">
                    <Button text="Cancel" ariaLabel="Cancel" handleClick={() => closeModal}/>
                </div>
            </div>
        </div>
    )
}