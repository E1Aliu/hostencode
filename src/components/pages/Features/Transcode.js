import React from 'react';
import {Link } from 'react-dom';
import { FormattedMessage} from 'react-intl';
import './styles/transcode.scss';
import {AiOutlineArrowRight} from 'react-icons/ai'


const Transcode =()=>{
    return(
        <div className="transcode">
            <h5>HIGHEST OF QUALITY</h5>
            <h1>Transcode up to 4K.</h1>
            <div className='bgc'>
            <div className='quality'>
                <div className='FirstQuality'>
                    <div className='SecondQuality'>
                        <div className='ThirdQuality'>
                            <h4 className='resolution'>480p</h4>
                        </div>
                        <h4>720p</h4>
                    </div>
                    <h4 className='res'>1080P</h4>
                </div>
                <div className='Description'>
                    <h2>The greatest quality at low price</h2>
                    <h6>Videos can be transcoded up to 4k resolution
                        using the latest technologies like HEVS OR VP9.
                    </h6>
                    <h6>
                        With CRF Encoding, target a visual quality instead of fiexed
                        bitrates to get the best qualiry/file size ratio.
                    </h6>
                    <div className='Btn'>
                        <button type='submit' className='More'>Read Our Format Specs <AiOutlineArrowRight/></button>
                    </div>
                    <h4>2160p(4k)</h4>

                </div>

            </div>
            </div>


        </div>
    )
}
export default Transcode;