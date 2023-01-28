import { Button } from '@/components'
import { useState, useRef } from 'react'
import useClickAway from '@/hooks/useClickAway'
import '../styles/components/_menu.scss'

type Props = {
    selectedRow?: {}
}
export default function Menu(props: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    useClickAway(menuRef, () => {
        setIsOpen(false)
    })

    const renderMenuList = () => {
        if(!isOpen) return null
        return (
            <div className="sd-menu__menulist">
                <button className="sd-menu-item sd-menu-item--leading-icon">
                    <span className="fa-solid fa-thumbtack"></span>
                    <span>Pin</span>
                </button>
                <button className="sd-menu-item text-red-500">Remove</button>
            </div>
        )
    }
    return (
        <div ref={menuRef} className="sd-menu" role="menu">
            <Button handleClick={() => setIsOpen(!isOpen)} variant="transparent">
              <span className="sd-icon fa-solid fa-ellipsis-h"></span>
            </Button>
        
            { renderMenuList() }
           
        </div>
    )
}