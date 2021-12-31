import React from 'react';
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Features/Banner'
import Transcode from '../../components/pages/Features/Transcode'
import EditVideos from '../../components/pages/Features/EditVideos'
import Watermarking from '../../components/pages/Features/Watermarking'
import HLS from '../../components/pages/Features/HLS'
import Customize from '../../components/pages/Features/Customize'
import UserExperience from "../../components/pages/Features/UserExperience"
import HostCloud from '../../components/shared/HostCloud/HostCloud'
import Pricing from '../../components/shared/Pricing/Pricing'
import LetsTalk from '../../components/shared/LetsTalk/LetsTalk'
import Comments from '../../components/shared/Comments/Comments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Features=()=>{
    return (
        <div className='ADS'>
            <Navbar />
             <Banner />
             <Transcode />
             <EditVideos/>
             <Watermarking/>
             <HLS/>
             <Customize/>
            <UserExperience/>
            <HostCloud />
            <Pricing />
            <LetsTalk />
            <Comments />
            <Subscribe />
            <Footer />
            

        </div>
    )
    

}
export default Features