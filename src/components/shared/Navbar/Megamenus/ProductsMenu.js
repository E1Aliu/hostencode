import React from 'react'
import './megamenu.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { ProductsData1, ProductsData2 } from '../data'

const ProductsMenu = () => {
    return (
        <div className='nav-megamenu products-megamenu'>

            <div className="left">
                <h5>
                    <FormattedMessage id="navbar-main-link2" defaultMessage='Products' />
                </h5>
                <div className="main-links">
                    {ProductsData1.map((props) => {
                        return(
                            <Link to={props.to} className='megamenu-link'>
                                <div className="icon-container">
                                    {props.icon}
                                </div>
                                <div className="block">
                                    <h6>{props.title}</h6>
                                    <p>{props.text}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="right">
                <div>
                    <h4>
                        <FormattedMessage id="more-products" defaultMessage='More products'/>
                    </h4>
                    <div className="links2">
                        {ProductsData2.map((props) => {
                            return(
                                <Link to={props.to}>
                                    {props.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <Link to='/' className='hover-button'>
                    <FormattedMessage id='view-all-button' defaultMessage='View All' />
                </Link>
            </div>
        </div>
    )
}

export default ProductsMenu
