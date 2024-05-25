import React, { Component } from 'react';
import headerCSS from './Header.module.css'
class Header extends Component {
    render() {
        return (

                <div className={headerCSS.header }>
                    <div className={headerCSS.headerContent}>
                       <h1 className='text-white'>Order your <div>favourite food here </div></h1>
                        <p className={headerCSS.headerContentP}>choose from a diverse menu featuring a delectable array of dishes crafted withthe finest ingredients and culinary expertise.
                            Our mission is satisfy your cravings and elevate your dining experience, on delicious meal at a time</p>  
                        <button className={headerCSS.headerContentButton}>view Menu</button>
                    </div>

                </div>
 
            
        );
    }
}

export default Header;