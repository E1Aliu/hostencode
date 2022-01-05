import React from "react";
import {Link} from 'react-router-dom';
import'./styles/customize.scss';
import {Costum} from './data'

const Customize=()=>{
    return(
        <div className="Customize">
            <h1>Customize the variants</h1>
            <h4>Our default onse are great,but some times you need more.</h4>
            <div className="Variants">
                {Costum.map((props)=>{
                    return(
                        <div className="Types">
                            <div className="img" style={{content:`url(${props.icone})`}}></div>
                            <h2>{props.title}</h2>
                            <h4>{props.describe}</h4>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Customize;