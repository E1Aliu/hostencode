import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FormattedMessage } from "react-intl";

import { FaProductHunt } from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {BiSliderAlt, BiSearch, BiInfoSquare, BiSupport} from 'react-icons/bi'
import {ImPriceTag} from 'react-icons/im'
import { AboutData, FeaturesData, ProductsData, SupportData } from './data';

// import {Data1, Data2, Data3} from '../../Navbar/data'

const Sidebar = (props) => {

    const List = (props) => {
        return (
            <div className='dropdown-links-items'>
                <Link to={props.item.to} className='sidebar-dropdown-link'>
                    {props.item.title}
                </Link>
            </div>
        )
    }

    const [list,showList] = useState(false);
    function show(){
        showList(!list);
    }

    const [list2,showList2] = useState(false);
    function show2(){
        showList2(!list2);
    }

    const [list3,showList3] = useState(false);
    function show3(){
        showList3(!list3);
    }
    const [list4,showList4] = useState(false);
    function show4(){
        showList4(!list4);
    }

    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'></div>
                    <h6>HostEncode</h6>
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show}>
                        <Link to='/' className='nav-anchor'>
                            <BiSliderAlt />
                            <FormattedMessage id="navbar-main-link1" defaultMessage='Features'/> 
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list===true && FeaturesData.map(item=>
                                    <List key={item.title} item={item} />) }
                </div>


                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show2}>
                        <Link to='/' className='nav-anchor'>
                            <FaProductHunt />
                            <FormattedMessage id="navbar-main-link2" defaultMessage='Products' />
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list2===true && ProductsData.map(item=>
                                    <List key={item.title} item={item} />) }
                </div>

                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                        <ImPriceTag /><FormattedMessage id="navbar-main-link3" defaultMessage='Pricing' />
                    </Link>
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show3}>
                        <Link to='/' className='nav-anchor'>
                            <BiInfoSquare />
                            <FormattedMessage id="navbar-main-link4" defaultMessage='About Us'/> 
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list3===true && AboutData.map(item=>
                                    <List key={item.title} item={item} />) }
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show4}>
                        <Link to='/' className='nav-anchor'>
                            <BiSupport />
                            <FormattedMessage id="navbar-main-link5" defaultMessage='Support'/> 
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list4===true && SupportData.map(item=>
                                    <List key={item.title} item={item} />) }
                </div>

               


            </div>

            <div className='sidebar-auth'>
                <Link to='/' className='login'>
                    <FormattedMessage id="navbar-main-login" defaultMessage='Log In' />
                </Link>
                <Link to='/' className='signup'>
                    <FormattedMessage id="navbar-main-signup" defaultMessage='Sign Up' />
                </Link>
                <div className="search-button">
                   <button className='inner-button'><BiSearch /></button>
                </div>
            </div>

            <div className='space'></div>
        </div>
    )
}

export default Sidebar
