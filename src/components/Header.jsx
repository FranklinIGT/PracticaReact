import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';
import '../styles/components/Header.css'
import { FaShoppingBasket } from "react-icons/fa";


const Header = () => {
    const {state :{cart}}=React.useContext(AppContext);
  

    const cartCount=React.useMemo(()=>{
        return cart.length
    },[cart])

    return (
        <div className="Header">

            <Link to='/'>
            <h1 className="Header-title">Conf Merch</h1>
            </Link>
            
            <div className="Header-checkout">
                <Link to="/checkout">
                <FaShoppingBasket title="checkout" size="1rem" />
                </Link>
                {cartCount > 0 ? (
          <div className="Header-alert">{cartCount}</div>
        ) : (
          <div className="Header-alert">0 Products</div>
        )}
                </div>
        </div>

        
    )
   
}

export default Header
