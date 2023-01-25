import { Button } from '@/components'
import { useState } from 'react'
import '../styles/components/_menu.scss'

type Props = {
    selectedRow?: {}[]
}
export default function Menu(props: Props) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu =  () => {
        setIsOpen(!isOpen)
    }

    const renderMenuList = () => {
        if(!isOpen) return
        return (
            <div className="sd-menu__menulist">
                <button className="sd-menu-item sd-menu-item--leading-icon">
                    <span className="fa-solid fa-thumbtack"></span>
                    <span>Pin</span>
                </button>
                <button className="sd-menu-item text-red-500">Remove row</button>
            </div>
        )
    }
    return (
        <div className="sd-menu" role="menu">
            <Button handleClick={toggleMenu} variant="transparent">
              <span className="sd-icon fa-solid fa-ellipsis-h"></span>
            </Button>
        
            { renderMenuList() }
           
        </div>
    )
}