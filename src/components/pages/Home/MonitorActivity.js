import React from 'react'
import './styles/MonitorActivity.scss'
import { FormattedMessage } from 'react-intl'
import { Data7 } from './data'

const MonitorActivity = () => {
    return (
        <div className='monitor-activity'>
            <h5>
                <FormattedMessage id='home-activity-subtitle' defaultMessage='real-time tracking' />
            </h5>
            <h1>
                <FormattedMessage id='home-activity-title' defaultMessage='Monitor your video encoding activity.' />
            </h1>
            <p className='p'>
                <FormattedMessage id='home-activity-text' defaultMessage='In one word: Monitor your video transcoding activity in real time.' />
            </p>


            <div className="inner-item">

                <div className="img-container">
                    <div className="img"></div>
                </div>

                <div className="inner-row">
                    <div className="line"></div>
                    <h4>
                        <FormattedMessage id='home-activity-heading4' defaultMessage='We use AI-based audio algorithms to achieve a professional quality result' />
                    </h4>
                    <div className="items1">
                        {Data7.map((props) => {
                            return(
                                <div className={`main-item ${props.cls}`}>
                                    {props.items.map((l) => {
                                        return(
                                            <div className="item1">
                                                <div className="block">
                                                    <h6>{l.title}</h6>
                                                    <p>{l.text}</p>
                                                </div>
                                                <div className="icon" style={{content: `url(${l.icon})`}}></div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonitorActivity
