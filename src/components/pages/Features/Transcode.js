import React from 'react';
import {Link } from 'react-dom';
import { FormattedMessage} from 'react-intl';
import './styles/transcode.scss';
import {AiOutlineArrowRight} from 'react-icons/ai'


const Transcode =()=>{
    return(
        <div className="transcode">
            <h5><FormattedMessage id="Quality" defaultMessage='HIGHEST OF QUALITY'/></h5>
            <h1><FormattedMessage id="Code" defaultMessage="Transcode up to 4K."/></h1>
            <div className='bgc'>
            <div className='quality'>
                <div className='FirstQuality'>
                    <div className='SecondQuality'>
                        <div className='ThirdQuality'>
                            <h4 className='resolution'>480p</h4>
                        </div>
                        <h4 className='Second'>720p</h4>
                    </div>
                    <h4 className='First'>1080P</h4>
                </div>
                <div className='Description'>
                    <h2>
                        <FormattedMessage id="Quality-titel" defaultMessage="The greatest quality at low price"/>

                    </h2>
                    <h6><FormattedMessage id='Video-Quality' defaultMessage="Videos can be transcoded up to 4k resolution
                        using the latest technologies like HEVS OR VP9."/>
                    </h6>
                    <h6>
                        <FormattedMessage id='CRF-Encoding' defaultMessage="With CRF Encoding, target a visual quality instead of fiexed
                        bitrates to get the best qualiry/file size ratio."/>
                    </h6>
                    <div className='Btn'>
                        <button type='submit' className='More'><FormattedMessage id='read-more'defaultMessage='Read Our Format Specs'/> <AiOutlineArrowRight/></button>
                    </div>
                    <h4>2160p(4k)</h4>

                </div>

            </div>
            </div>


        </div>
    )
}
export default Transcode;