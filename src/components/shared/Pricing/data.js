import { FormattedMessage } from 'react-intl'
import icon1 from '../../../assets/shared/pricing/icon1.svg'
import icon2 from '../../../assets/shared/pricing/icon2.svg'
import icon3 from '../../../assets/shared/pricing/icon3.svg'
import icon4 from '../../../assets/shared/pricing/icon4.svg'
import icon5 from '../../../assets/shared/pricing/icon5.svg'
import icon6 from '../../../assets/shared/pricing/icon6.svg'

export const Data1 = [
    {
        title: <FormattedMessage id='pricing-title1' defaultMessage='Free' />,
        price:'$0',
        to:'/',
        description: <FormattedMessage id='pricing-description1' defaultMessage='For the ones that want to try our services' />,
        text: <FormattedMessage id='pricing-text1' defaultMessage='Free includes' />,
        items:[
            {
                icon:icon1,
                item:<FormattedMessage id='pricing-item1' defaultMessage='Basic encoding' />,
            },
            {
                icon:icon2,
                item:<FormattedMessage id='pricing-item2' defaultMessage='Low transcoding' />,
            },
            {
                icon:icon3,
                item:<FormattedMessage id='pricing-item3' defaultMessage='720p player' />,
            },
            {
                icon:icon4,
                item:<FormattedMessage id='pricing-item4' defaultMessage='Simple converter' />,
            }
        ]
    },
    {
        title: <FormattedMessage id='pricing-title2' defaultMessage='Basic' />,
        price:'$9',
        to:'/',
        description: <FormattedMessage id='pricing-description2' defaultMessage='For individuals or small teams getting started' />,
        text: <FormattedMessage id='pricing-text2' defaultMessage='Basic includes' />,
        items:[
            {
                icon:icon1,
                item:<FormattedMessage id='pricing-item5' defaultMessage='Review and approva' />,
            },
            {
                icon:icon2,
                item:<FormattedMessage id='pricing-item6' defaultMessage='Version control' />,
            },
            {
                icon:icon3,
                item:<FormattedMessage id='pricing-item7' defaultMessage='Auto compare' />,
            },
            {
                icon:icon4,
                item:<FormattedMessage id='pricing-item8' defaultMessage='Unlimited reviewers' />,
            }
        ]
    },
    {
        title: <FormattedMessage id='pricing-title3' defaultMessage='Intermediate' />,
        price:'$18',
        to:'/',
        description: <FormattedMessage id='pricing-description3' defaultMessage='For teams that manage a wide range of media types' />,
        text: <FormattedMessage id='pricing-text3' defaultMessage='Basic features, plus:' />,
        items:[
            {
                icon:icon4,
                item:<FormattedMessage id='pricing-item9' defaultMessage='Review all media types' />,
            },
            {
                icon:icon2,
                item:<FormattedMessage id='pricing-item10' defaultMessage='Branding' />,
            },
            {
                icon:icon1,
                item:<FormattedMessage id='pricing-item11' defaultMessage='Customized notification emails' />,
            },
        ]
    },
    {
        title: <FormattedMessage id='pricing-title4' defaultMessage='Business' />,
        price:'$45',
        to:'/',
        description: <FormattedMessage id='pricing-description4' defaultMessage='For companies that need to streamline their review workflows' />,
        text: <FormattedMessage id='pricing-text4' defaultMessage='Starter features, plus:' />,
        items:[
            {
                icon:icon4,
                item:<FormattedMessage id='pricing-item12' defaultMessage='Automations' />,
            },
            {
                icon:icon2,
                item:<FormattedMessage id='pricing-item13' defaultMessage='Insights & reporting' />,
            },
            {
                icon:icon1,
                item:<FormattedMessage id='pricing-item14' defaultMessage='Extended branding' />,
            },
            {
                icon:icon5,
                item:<FormattedMessage id='pricing-item15' defaultMessage='Unlimited workspaces & folders' />,
            },
            {
                icon:icon6,
                item:<FormattedMessage id='pricing-item16' defaultMessage='Advanced commenting' />,
            }
        ]
    }
]