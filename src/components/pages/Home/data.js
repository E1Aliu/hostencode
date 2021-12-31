import { FormattedMessage } from "react-intl";

import icon1 from '../../../assets/Home/icon1.svg'
import icon2 from '../../../assets/Home/icon2.svg'
import icon3 from '../../../assets/Home/icon3.svg'
import icon4 from '../../../assets/Home/icon4.svg'
import icon5 from '../../../assets/Home/icon5.svg'
import icon6 from '../../../assets/Home/icon6.svg'
import icon7 from '../../../assets/Home/icon7.svg'
import icon8 from '../../../assets/Home/icon8.svg'
import icon9 from '../../../assets/Home/icon9.svg'
import icon10 from '../../../assets/Home/icon10.svg'
import icon11 from '../../../assets/Home/icon11.svg'
import icon12 from '../../../assets/Home/icon12.svg'
import icon13 from '../../../assets/Home/icon13.svg'
import icon14 from '../../../assets/Home/icon14.svg'
import icon15 from '../../../assets/Home/icon15.svg'
import icon16 from '../../../assets/Home/icon16.svg'
import icon17 from '../../../assets/Home/icon17.svg'
import icon18 from '../../../assets/Home/icon18.svg'
import icon19 from '../../../assets/Home/icon19.svg'

import img4 from '../../../assets/Home/img4.jpg'
import img5 from '../../../assets/Home/img5.jpg'

import svg1 from '../../../assets/Home/other-icons/svg1.svg'
import svg2 from '../../../assets/Home/other-icons/svg2.svg'
import svg3 from '../../../assets/Home/other-icons/svg3.svg'
import svg4 from '../../../assets/Home/other-icons/svg4.svg'
import svg5 from '../../../assets/Home/other-icons/svg5.svg'
import svg6 from '../../../assets/Home/other-icons/svg6.svg'
import svg7 from '../../../assets/Home/other-icons/svg7.svg'
import svg8 from '../../../assets/Home/other-icons/svg8.svg'

export const Data1 = [
    {
        icon:icon1,
        title:<FormattedMessage id='home-features-title1' defaultMessage='Transform' />,
        text:<FormattedMessage id='home-features-text1' defaultMessage='Powerful cloud native transcoding service with advanced content assembly capabilities for broadcast, contribution and distribution formats' />,
    },
    {
        icon:icon2,
        title:<FormattedMessage id='home-features-title2' defaultMessage='Timed Text Speech' />,
        text:<FormattedMessage id='home-features-text2' defaultMessage='Instantly create highly accurate captions and subtitles with Machine Learning based speech to text technology.' />,
    },
    {
        icon:icon3,
        title:<FormattedMessage id='home-features-title3' defaultMessage='Quality Control' />,
        text:<FormattedMessage id='home-features-text3' defaultMessage='Start running quality and compliance checks within minutes without software installation or hardware provisioning.' />,
    },
    {
        icon:icon4,
        title:<FormattedMessage id='home-features-title4' defaultMessage='Optimize operations' />,
        text:<FormattedMessage id='home-features-text4' defaultMessage="Being able to control costs, mitigate risk, and manage workflow complexity is vital to the success of your business." />,
    }
]

export const Data2 = [
    {
        item:'item1',
        color1:'color1',
        color2:'color2',
        storage:'3,100 kbps',
        text:<FormattedMessage id='home-investment-text1' defaultMessage='HostEncode Plan' />
    },
    {
        item:'item2',
        color1:'color3',
        color2:'color4',
        storage:'4,500 kbps',
        text:<FormattedMessage id='home-investment-text1' defaultMessage='Standard' />   
    }
]
export const Data3 = [
    {
        icon:icon5,
        title:<FormattedMessage id='home-features2-title1' defaultMessage='Host Cloud Port' />,
        text:<FormattedMessage id='home-features2-text1' defaultMessage='Leverage the power of your Host workflows and the simplicity and flexibility of the cloud combined into one hybrid media processing solution.' />
    },
    {
        icon:icon6,
        title:<FormattedMessage id='home-features2-title2' defaultMessage='Stream Monitor' />,
        text:<FormattedMessage id='home-features2-text2' defaultMessage='Create realtime monitor of stream availability, delivery performance and content quality across over 70 global regions.' />
    },
    {
        icon:icon7,
        title:<FormattedMessage id='home-features2-title3' defaultMessage='Flip' />,
        text:<FormattedMessage id='home-features2-text3' defaultMessage='Easily produce high quality content with fast and cost effective transcoding service for a variety of applications - web, multiscreen, broadcast or postproduction.' />
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
                icon:icon8,
                title:<FormattedMessage id='home-rec1' defaultMessage='VVC' />
            },
            {
                rectangle:'',
                icon:icon9,
                title:<FormattedMessage id='home-rec2' defaultMessage='Per-Title Encoding' />
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
                title:<FormattedMessage id='home-rec3' defaultMessage='Server-Side Ad Insertion' />
            },
            {
                rectangle:'',
                icon:icon11,
                title:<FormattedMessage id='home-rec4' defaultMessage='Encoding' />
            },
            {
                rectangle:'',
                icon:icon8,
                title:<FormattedMessage id='home-rec5' defaultMessage='VP9' />
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
                icon:icon12,
                title:<FormattedMessage id='home-rec6' defaultMessage='3-Pass Encoding' />
            },
            {
                rectangle:'',
                icon:icon8,
                title:<FormattedMessage id='home-rec7' defaultMessage='AV1' />
            },
            {
                rectangle:''
            }
        ]
    }
]

export const Data5 = [
    {
        img:img4,
        cls:'row1',
        subtitle:<FormattedMessage id='home-quality-subtitle1' defaultMessage='WE ARE PREMIUM FIRST' />,
        title:<FormattedMessage id='home-quality-title1' defaultMessage='Premium transcoding' />,
        heading6:<FormattedMessage id='home-heading1' defaultMessage='Media processing platform for video/image, audio and subtitle/caption processing' />,
        text:<FormattedMessage id='home-quality-text1' defaultMessage='Workflow engine packaged for use where you need media conversions, on-premises, in a Host-managed SaaS environment, or inside your own VPC.' />,
        icon1:icon13,
        icon2:icon14,
        item1:<FormattedMessage id='home-quality-item1' defaultMessage='Flexible pricing' />,
        item2:<FormattedMessage id='home-quality-item2' defaultMessage='Perpetual or usage-based' />,
        to1:'/',
        to2:'/'
    },
    {
        img:img5,
        cls:'row2',
        subtitle:<FormattedMessage id='home-quality-subtitle2' defaultMessage='QUALITY IS PRIORITY' />,
        title:<FormattedMessage id='home-quality-title2' defaultMessage='High-Quality Conversions' />,
        heading6:<FormattedMessage id='home-heading2' defaultMessage='With continued development, including Dolby Vision, HDR10, ACES, and regular codec updates/additions' />,
        text:<FormattedMessage id='home-quality-text2' defaultMessage='HostEncode has been trusted by major media organizations to handle standards conversions, archive packaging and color conversions for over 10 years.' />,
        icon1:icon15,
        icon2:icon16,
        item1:<FormattedMessage id='home-quality-item3' defaultMessage='Workflow-driven transcoding' />,
        item2:<FormattedMessage id='home-quality-item4' defaultMessage='Elasticity and flexibility' />,
        to1:'/',
        to2:'/'
    }
]

export const Data6 = [
    {
        icon:icon17,
        title:<FormattedMessage id='home-infrastructure-title1' defaultMessage='Encoding' />,
        links:[
            {
                link:<FormattedMessage id='home-infrastructure-link1' defaultMessage='About Encoding' />,
                to:'/'
            },
            {
                link:<FormattedMessage id='home-infrastructure-link2' defaultMessage='Documentation' />,
                to:'/'
            },
            {
                link:<FormattedMessage id='home-infrastructure-link3' defaultMessage='Try It For Free' />,
                to:'/'
            }
        ]    
    },
    {
        icon:icon18,
        title:<FormattedMessage id='home-infrastructure-title1' defaultMessage='Player' />,
        text:<FormattedMessage id='home-infrastructure-text1' defaultMessage='Enable content owners to deliver content to any device' />,
        mainTo:'/'
    },
    {
        icon:icon19,
        title:<FormattedMessage id='home-infrastructure-title2' defaultMessage='Analytics' />,
        text:<FormattedMessage id='home-infrastructure-text2' defaultMessage='Actionable insights across every stream, on every device, any time.' />,
        mainTo:'/'
    }
]

export const Data7 = [
    {
        cls:'col1',
        items:[
            {
                icon:svg1,
                title:<FormattedMessage id='home-monitor-title1' defaultMessage='Speech Recognition and Transcript Editor' />,
                text:<FormattedMessage id='home-monitor-text1' defaultMessage='Automatic speech recognition with editor in over 80 languages' />,
            },
            {
                icon:svg2,
                title:<FormattedMessage id='home-monitor-title2' defaultMessage='Optimal Encoding, Metadata and Chapter Marks' />,
                text:<FormattedMessage id='home-monitor-text2' defaultMessage='MP3, Opus, AAC/MP4, Ogg Vorbis, ALAC, FLAC, etc.
                Enhanced podcasts, chapters in MP4, ID3 (MP3) and Vorbis' />,
            },
            {
                icon:svg3,
                title:<FormattedMessage id='home-monitor-title3' defaultMessage='Video Workflow and Audiograms' />,
                text:<FormattedMessage id='home-monitor-text3' defaultMessage='video input/output support and audiogram waveform videos' />,
            },
            {
                icon:svg4,
                title:<FormattedMessage id='home-monitor-title4' defaultMessage='Automatic Content Deployment' />,
                text:<FormattedMessage id='home-monitor-text4' defaultMessage='Dropbox, (S)FTP, HTTP, Google Drive and Cloud Storage,
                WebDAV, (Amazon) S3, YouTube, Facebook, SoundCloud,
                Spreaker, Libsyn, Podlove, Zapier, Blubrry, Archive.org' />,
            }
        ]
    },
    {
        cls:'col2',
        items:[
            {
                icon:svg5,
                title:<FormattedMessage id='home-monitor-title5' defaultMessage='Intelligent Leveler' />,
                text:<FormattedMessage id='home-monitor-text5' defaultMessage='balances levels between speakers, music and speech – no
                compressor knowledge required' />,
            },
            {
                icon:svg6,
                title:<FormattedMessage id='home-monitor-title6' defaultMessage='Loudness Normalization' />,
                text:<FormattedMessage id='home-monitor-text6' defaultMessage='to broadcast standards (EBU R128, ATSC A/85, Mobile),
                including a true peak limiter and more' />,
            },
            {
                icon:svg7,
                title:<FormattedMessage id='home-monitor-title7' defaultMessage='Audio Restoration' />,
                text:<FormattedMessage id='home-monitor-text7' defaultMessage='automatic noise and hum reduction, filtering of unwanted low
                frequencies' />,
            },
            {
                icon:svg8,
                title:<FormattedMessage id='home-monitor-title8' defaultMessage='Multitrack Algorithms' />,
                text:<FormattedMessage id='home-monitor-text8' defaultMessage='featuring automatic ducking, noise gate and cross talk (spill)
                removal' />,
            }
        ]
    }
]