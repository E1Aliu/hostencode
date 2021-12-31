import React, {useState} from 'react'
import './Subscribe.scss'
import { FormattedMessage } from 'react-intl'
import { BiEnvelope } from 'react-icons/bi'
import { BsArrowReturnLeft } from 'react-icons/bs'

const Subscribe = () => {

    const [email, setEmail] = useState('');

    return (
        <div className='shared-subscribe-component'>
            <h1>
                <FormattedMessage id='subscribe-title' defaultMessage="Don't miss out" />
            </h1>

            <div className="email-container">
                <span><BiEnvelope /></span>
                <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    id='email'
                    placeholder='Enter email address...'
                />
                <button><BsArrowReturnLeft /></button>
            </div>
        </div>
    )
}

export default Subscribe
