import React, { useState } from 'react'
import './Header.css'

function Header() {
    const [links, setLinks] = useState([
        {
            name:'home'
        },
        
        {
            name:'blog'
        },
        {
            name:'account'
        },
    ])
    return (
        <div className="header">
            <div className="header__content">
                {
                    links.map(link => (
                        <a href={link.name}>{link.name}</a>
                    ))
                }
            </div>
        </div>
    )
}
      
export default Header
