import React from 'react'
import './styles/features1.scss'
import { Data1 } from './data'

const Features1 = () => {
    return (
        <div className='shared-features-styling'>
            {Data1.map((props) => {
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

export default Features1
