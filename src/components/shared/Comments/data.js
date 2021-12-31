import { FormattedMessage } from 'react-intl'
import profile1 from '../../../assets/shared/profile1.png'
import profile2 from '../../../assets/shared/profile2.png'
import profile3 from '../../../assets/shared/profile3.png'
import profile4 from '../../../assets/shared/profile4.png'
import profile5 from '../../../assets/shared/profile5.png'

export const TabData = [
    {
        profile:profile1,
        name:'Ashley Hunt'
    },
    {
        profile:profile2,
        name:'Alan Bridges'
    },
    {
        profile:profile3,
        name:'Priyak Shebib'
    },
    {
        profile:profile4,
        name:'Betsy Jeff'
    },
    {
        profile:profile5,
        name:'Erin Schneider'
    }
]

export const PanelData = [
    {
        title:<FormattedMessage id='comment-title1' defaultMessage='Transform' />,
        comment:<FormattedMessage id='comment-text1' defaultMessage='Powerful cloud native transcoding service with advanced content assembly capabilities for broadcast, contribution and distribution formats' />
    },
    {
        title:<FormattedMessage id='comment-title2' defaultMessage='Flip' />,
        comment:<FormattedMessage id='comment-text2' defaultMessage='Easily produce high quality content with fast and cost effective transcoding service for a variety of applications - web, multiscreen, broadcast or postproduction.' />
    },
    {
        title:<FormattedMessage id='comment-title3' defaultMessage='Transcoding needs to be this easy' />,
        comment:<FormattedMessage id='comment-text3' defaultMessage="With HostEncode i've had it so much easier to transcode my videos and modify them however i want, the noise cancellation is a great feature and makes the process so much easier." />
    },
    {
        title:<FormattedMessage id='comment-title1' defaultMessage='Transform' />,
        comment:<FormattedMessage id='comment-text1' defaultMessage='Powerful cloud native transcoding service with advanced content assembly capabilities for broadcast, contribution and distribution formats' />
    },
    {
        title:<FormattedMessage id='comment-title2' defaultMessage='Flip' />,
        comment:<FormattedMessage id='comment-text2' defaultMessage='Easily produce high quality content with fast and cost effective transcoding service for a variety of applications - web, multiscreen, broadcast or postproduction.' />
    }
]