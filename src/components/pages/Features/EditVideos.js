import React from 'react';
import { Link } from 'react-router-dom';
import './styles/editvideos.scss';
import { FormattedMessage } from 'react-intl'
import { Edit } from './data';


const EditVideos=()=>{
    return(
            <div className='EditVideos'>
                <h2><FormattedMessage id='Edit-Videos' defaultMessage="Edit your videos"/></h2>
                <h6><FormattedMessage id='Control-Videos' defaultMessage='Control how your videos look within your app'/></h6>
                <div  className='Type'>
                    {Edit.map((props)=>{
                        return(
                            <div className='How'>
                                <div className='icon'>
                                <p>{props.icone}</p>
                                </div>
                                <h4>{props.title}</h4>
                                <p>{props.describe}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}
export default EditVideos;