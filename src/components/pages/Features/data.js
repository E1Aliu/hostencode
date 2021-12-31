import {FormattedMessage} from 'react-intl';
import {AiFillApple,AiFillFile,AiOutlineCalendar} from 'react-icons/ai'
import {BiCut} from 'react-icons/bi';
import{MdOutlineScreenLockRotation,MdOutlineAspectRatio,MdVideoLibrary} from 'react-icons/md';







import icon8 from '../../../assets/Home/icon8.svg'
import icon9 from '../../../assets/Home/icon9.svg'
import icon10 from '../../../assets/Home/icon10.svg'
import icon11 from '../../../assets/Home/icon11.svg'
import icon12 from '../../../assets/Home/icon12.svg'



export const Edit = [
    {icone:<BiCut/>,
    title:'Cut specific parts of Videos',
    describe:'Extract any part of a video.Need a 30sec preview?Thas all you need',  
    },
    {
        icone:<MdOutlineScreenLockRotation/>,
        title:"Automatic Rotation",
        describe:'The videos are automatically rotated according to meta data',
    },
    {
        icone:<MdOutlineAspectRatio/>,
        title:'Fit and aspect ration',
        describe:'Crop or add black bars to fit any required aspect ratio',
        
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
        icone:<AiFillFile/>,
        title:'HH264 and HEVS codecs',
        describe:'Variants with H264(default) and new HEVC codec,are supported',

    },
    {
        icone:<AiOutlineCalendar/>,
        title:'Segment duration',
        describe:'Change the segment duration if needed',
    },
    {
        icone:<MdVideoLibrary/>,
        title:'No waste of resource',
        describe:'We never upscale to highter resulution than the original video'
    }
]