import React , { useState } from 'react'
import './Right.css'

function Right() {
    const [hots, sethots] = useState([
        {
            topic:'Olympic'
        },
    ])
    return (
        <div className="right">
            <div className="right__header">
                <h1>Hot topics</h1>
            </div>
            <div className="right__body">
               {
                   hots.map(hot => (
                    <ul>
                    <a href={hot.topic}>
                    <li>{hot.topic}</li>
                    </a>
                </ul>
                ))
               }
            </div>
        </div>
    )
}

export default Right
