import React, { useState } from 'react'
import { Button } from '@/components'
import '@/styles/components/_modal.scss'

type Props = {
    open?: boolean,
    children?:React.ReactNode
} & typeof defaultProps

const defaultProps = {
    open: false
}

export default function Modal(props: Props) {
    const [isOpen, setIsOpen] = useState(props.open)
    const modalClasses = ['sd-modal', isOpen ? 'sd-modal--shown' : '']

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className={modalClasses.join(' ')}>
            <div className="sd-modal__block">
                <div className="sd-modal__top-bar"></div>
                <div className="sd-modal__content">
                   { props.children }
                </div>
                <div className="sd-modal__action-bar">
                    <Button text="Cancel" ariaLabel="Cancel" handleClick={toggleModal}/>
                </div>
            </div>
        </div>
    )
}

Modal.defaulProps = defaultProps