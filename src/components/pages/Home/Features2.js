import React from 'react'
import './styles/features1.scss'
import { Data3 } from './data'

const Features2 = () => {
    return (
        <div className='shared-features-styling shared-features-styling2'>
            {Data3.map((props) => {
                return(
                    <div className="item1">
                        <div className="icon-container">
                            <div className="icon" style={{content: `url(${props.icon})`}}></div>
                        </div>
                        <h6>{props.title}</h6>
                        <p>{props.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Features2
