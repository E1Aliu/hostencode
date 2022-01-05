import {FormattedMessage} from 'react-intl';
import {AiFillApple,AiFillFile,AiOutlineCalendar} from 'react-icons/ai'
import {BiCut} from 'react-icons/bi';
import{MdOutlineScreenLockRotation,MdOutlineAspectRatio,MdVideoLibrary} from 'react-icons/md';


import Watermarking from '../../../assets/Features/Watermarking.png';
import AudioFile from '../../../assets/Features/AudioFile.png';
import Resource from '../../../assets/Features/Resource.png';
import Segment from '../../../assets/Features/Segment.png';
import AVI from '../../../assets/Features/AVI.png';







import icon8 from '../../../assets/Home/icon8.svg'
import icon9 from '../../../assets/Home/icon9.svg'
import icon10 from '../../../assets/Home/icon10.svg'
import icon11 from '../../../assets/Home/icon11.svg'
import icon12 from '../../../assets/Home/icon12.svg'



export const Edit = [
    {icone:<BiCut/>,
    title:<FormattedMessage id='Cut-Title' defaultMessage='Cut specific parts of Videos'/>,
    describe:<FormattedMessage id='Cut-desc' defaultMessage='Extract any part of a video.Need a 30sec preview?Thas all you need'/>,  
    },
    {
        icone:<MdOutlineScreenLockRotation/>,
        title:<FormattedMessage id='Rotatio-title' defaultMessage="Automatic Rotation"/>,
        describe:<FormattedMessage id='Rotation-desc' defaultMessage='The videos are automatically rotated according to meta data'/>,
    },
    {
        icone:<MdOutlineAspectRatio/>,
        title:<FormattedMessage id='Aspect-Ration' defaultMessage='Fit and aspect ration'/>,
        describe:<FormattedMessage id='Crop' defaultMessage='Crop or add black bars to fit any required aspect ratio'/>,
        
    }
]
export const data1 = [
    {
        img:Watermarking,
        cls:'row1',
        subtitle:<FormattedMessage id='Watermarking-quality-subtitle1' defaultMessage='WE ARE PREMIUM FIRST' />,
        title:<FormattedMessage id='Watermarking-quality-title1' defaultMessage='Customizable Watermarking' />,
        heading6:<FormattedMessage id='home-heading1' defaultMessage='Highlight your brand adding your logo and costumize it however you like' />,
        to1:'/',
        to2:'/'

    },
    {
        img:AudioFile,
        cls:'row2',
        subtitle:<FormattedMessage id='Audio-quality-subtitle1' defaultMessage='QUALITY IS PRIORITY' />,
        title:<FormattedMessage id='Audio-quality-title1' defaultMessage='We transcode audio files too!' />,
        heading6:<FormattedMessage id='Audio-heading1' defaultMessage='HostEncode is not for video only! We do suport MP3, WAV, OGG, Vorbis and Ac3 formats.' />,
        to1:'/',
        to2:'/'

    }
]
export const Data4 = [
    {
        cls:'row1',
        items:[
            {
                rectangle:''
            },
            {
                rectangle:''
            }
        ]
    },
    {
        cls:'row2',
        items:[
            {
                rectangle:''
            },
            {
                rectangle:'',
            },
            {
                rectangle:'',
            },
            {
                rectangle:''
            }
        ]
    },
    {
        cls:'row3',
        items:[
            {
                rectangle:'',
                 icon:icon10,
                title:<FormattedMessage id='home-rec3' defaultMessage='HLS fMP4' />
            },
            {
                rectangle:'',
                 icon:icon11,
                title:<FormattedMessage id='home-rec4' defaultMessage='HLS' />
            },
            {
                rectangle:'',
                 icon:icon8,
                title:<FormattedMessage id='home-rec5' defaultMessage='MPEG-Dash' />
            }
        ]
    },
    {
        cls:'row4',
        items:[
            {
                rectangle:''
            },
            {
                rectangle:'',
            },
            {
                rectangle:'',
            },
            {
                rectangle:''
            }
        ]
    }
]

export const Costum = [
    {
        icone:AVI,
        title:<FormattedMessage id='Hevs' defaultMessage='HH264 and HEVS codecs'/>,
        describe:<FormattedMessage id='H264' defaultMessage='Variants with H264(default) and new HEVC codec,are supported'/>,

    },
    {
        icone:Segment,
        title:<FormattedMessage id='Duration' defaultMessage='Segment duration'/>,
        describe:<FormattedMessage id='Changes' defaultMessage='Change the segment duration if needed'/>,
    },
    {
        icone:Resource,
        title:<FormattedMessage id="resurce-title" defaultMessage='No waste of resource'/>,
        describe:<FormattedMessage id='resurce-desc' defaultMessage='We never upscale to highter resulution than the original video'/>
    }
]

// export cosnt export const Data5 = [
//     {
//         img:img4,
//         cls:'row2',
//         subtitle:<FormattedMessage id='home-quality-subtitle1' defaultMessage='WE ARE PREMIUM FIRST' />,
//         title:<FormattedMessage id='home-quality-title1' defaultMessage='Premium transcoding' />,
//         heading6:<FormattedMessage id='home-heading1' defaultMessage='Media processing platform for video/image, audio and subtitle/caption processing' />,
//         text:<FormattedMessage id='home-quality-text1' defaultMessage='Workflow engine packaged for use where you need media conversions, on-premises, in a Host-managed SaaS environment, or inside your own VPC.' />,
//         icon1:icon13,
//         icon2:icon14,
//         item1:<FormattedMessage id='home-quality-item1' defaultMessage='Flexible pricing' />,
//         item2:<FormattedMessage id='home-quality-item2' defaultMessage='Perpetual or usage-based' />,
//         to1:'/',
//         to2:'/'
//     },
//     {
//         img:img5,
//         cls:'row1',
//         subtitle:<FormattedMessage id='home-quality-subtitle2' defaultMessage='QUALITY IS PRIORITY' />,
//         title:<FormattedMessage id='home-quality-title2' defaultMessage='High-Quality Conversions' />,
//         heading6:<FormattedMessage id='home-heading2' defaultMessage='With continued development, including Dolby Vision, HDR10, ACES, and regular codec updates/additions' />,
//         text:<FormattedMessage id='home-quality-text2' defaultMessage='HostEncode has been trusted by major media organizations to handle standards conversions, archive packaging and color conversions for over 10 years.' />,
//         icon1:icon15,
//         icon2:icon16,
//         item1:<FormattedMessage id='home-quality-item3' defaultMessage='Workflow-driven transcoding' />,
//         item2:<FormattedMessage id='home-quality-item4' defaultMessage='Elasticity and flexibility' />,
//         to1:'/',
//         to2:'/'
//     }
// ]