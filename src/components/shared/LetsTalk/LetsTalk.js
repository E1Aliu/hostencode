import React from 'react'
import './LetsTalk.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const LetsTalk = () => {
    return (
        <div className='shared-lets-talk'>
            <h5>
                <FormattedMessage id='lets-talk-text' defaultMessage='Enterprise' />
            </h5>
            <h1>
                <FormattedMessage id='lets-talk-title' defaultMessage="Let's Talk" />
            </h1>
            <Link to='/'>
                <FormattedMessage id='learn-more-button' defaultMessage='Learn More' />
            </Link>
        </div>
    )
}

export default LetsTalk
