import React, {useState} from 'react'
import './Comments.scss'
import { FormattedMessage } from 'react-intl'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import { PanelData, TabData } from './data'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Comments = () => {
    const [selectedTab, setSelectedTab] = useState(2);
    const tabCount = 5;

    return (
        <div className='shared-what-others-say'>
            <h5>
                <FormattedMessage id='what-say-text' defaultMessage='Testimonials' />
            </h5>
            <h1>
                <FormattedMessage id='what-say-title' defaultMessage='What others say about us' />
            </h1>

            <Tabs className='main-tab' selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>



                <div className="tab-panel">
                    <button onClick={() => setSelectedTab((selectedTab + tabCount - 1) % tabCount )} className='panel-button'>
                        <MdKeyboardArrowLeft />
                    </button>

                    <div className="inner-tab-panels">
                        {PanelData.map((props) => {
                            return(
                                <TabPanel>
                                    <h2>"{props.title}"</h2>
                                    <p>{props.comment}</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </div>

                    <button onClick={() => setSelectedTab((selectedTab + 1) % tabCount )} className='panel-button'>
                        <MdKeyboardArrowRight />
                    </button>
                </div>


                <TabList>
                    {TabData.map((props) => {
                        return(
                            <Tab>
                                <div className="profile" style={{content: `url(${props.profile})`}}></div>
                                <h6>{props.name}</h6>
                            </Tab>
                        )
                    })}
                </TabList>

            </Tabs>

            <div className="link-container">
                <Link to='/' className='hover-button'>
                    <FormattedMessage id='view-all-button' defaultMessage='View All' />
                </Link>
            </div>

        </div>
    )
}

export default Comments
