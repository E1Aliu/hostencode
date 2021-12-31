import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Home/Banner'
import Transcoding from '../../components/pages/Home/Transcoding'
import Features1 from '../../components/pages/Home/Features1'
import Investment from '../../components/pages/Home/Investment'
import CloudVideo from '../../components/pages/Home/CloudVideo'
import Quality from '../../components/pages/Home/Quality'
import Infrastructure from '../../components/pages/Home/Infrastructure'
import Features2 from '../../components/pages/Home/Features2'
import MonitorActivity from '../../components/pages/Home/MonitorActivity'
import HostCloud from '../../components/shared/HostCloud/HostCloud'
import Pricing from '../../components/shared/Pricing/Pricing'
import LetsTalk from '../../components/shared/LetsTalk/LetsTalk'
import Comments from '../../components/shared/Comments/Comments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Banner />
            <Transcoding />
            <Features1 />
            <Investment />
            <CloudVideo />
            <Quality />
            <Infrastructure />
            <Features2 />
            <MonitorActivity />
            <HostCloud />
            <Pricing />
            <LetsTalk />
            <Comments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home
