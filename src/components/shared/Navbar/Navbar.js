import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import clsx from "clsx";
import { FormattedMessage } from "react-intl";

import {BsTriangleFill} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import './navbar.scss'
import FeaturesMenu from './Megamenus/FeaturesMenu';
import ProductsMenu from './Megamenus/ProductsMenu';
import AboutMenu from './Megamenus/AboutMenu';
import SupportMenu from './Megamenus/SupportMenu';
import MobileNav from '../MobileNav/MobileNav'

import Login from '../../../pages/Login/Login';

const Navbar = (props) => {  

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 180 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="navbar" className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")} >
            <Link to='/' className='nav-logo'>
                <div className='logo-container'></div>
                <h6>HostEncode</h6>
            </Link>

            <div className='nav-links'>

                <div className='nav-link features-link'>
                    <Link to='/' className='inner-nav-link'>
                        <FormattedMessage id="navbar-main-link1" defaultMessage='Features'/> 
                        <MdKeyboardArrowDown className='arrow1'/>
                    </Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                    <div className='line'></div>
                   <FeaturesMenu />
                </div>

                <div className='nav-link products-link'>
                    <Link to='/' className='inner-nav-link'>
                        <FormattedMessage id="navbar-main-link2" defaultMessage='Products' />
                        <MdKeyboardArrowDown className='arrow1'/>
                    </Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                    <div className='line'></div>
                    <ProductsMenu />
                </div>


                <div className='nav-link pricing-link'>
                    <Link to='/'  className='inner-nav-link' >
                        <FormattedMessage id="navbar-main-link3" defaultMessage='Pricing' />
                    </Link>
                    <div className='line'></div>
                </div>

                <div className='nav-link about-link'>
                    <Link to='/' className='inner-nav-link'>
                        <FormattedMessage id="navbar-main-link4" defaultMessage='About Us'/> 
                        <MdKeyboardArrowDown className='arrow1'/>
                    </Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                    <div className='line'></div>
                    <AboutMenu />
                </div>

                <div className='nav-link support-link'>
                    <Link to='/' className='inner-nav-link'>
                        <FormattedMessage id="navbar-main-link5" defaultMessage='Support'/> 
                        <MdKeyboardArrowDown className='arrow1'/>
                    </Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                    <div className='line'></div>
                    <SupportMenu />
                </div>

                

             </div>

            <div className='nav-auth'>
               <div className="search-button">
                   <button className='inner-button'><BiSearch /></button>
               </div>
                <Link to='Login' className='login'>
                    <FormattedMessage id="navbar-main-login" defaultMessage='Log In' />
                </Link>
                <Link to='/' className='signup'>
                    <FormattedMessage id="navbar-main-signup" defaultMessage='Sign Up' />
                </Link>
            </div>

            <MobileNav />
        </div>
    )
}

export default Navbar