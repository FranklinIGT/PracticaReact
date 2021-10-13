import React from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom'
import {FaTrashAlt } from 'react-icons/fa';
import AppContext from './../context/AppContext';
import Sumtotal from '../utils/Sumtotal';



const Checkout = () => {

  const{state:{cart},removeFromCart}=React.useContext(AppContext);
  
  const handleRemove = product =>()=>{
  removeFromCart(product);
  }
 
  const cartCount=React.useMemo(()=>{
    return cart.length
  },[cart])

  const handleSumtotal=React.useMemo(()=>{
   return Sumtotal(cart)
  },[cart])



  return (
    <div className="Checkout">
      <div className="Checkout-content">
      <h3>{cartCount > 0 ? 'Lista de pedidos' : 'Sin pedidos'}</h3>
      
      {cart.map(product =>
      (<div key={product.cartId} className="Checkout-item">
        <div className="Checkout-element">
          <h4>{product.title}</h4>
          <span>{product.price}  </span>
        </div>
          <button type="button" onClick={handleRemove(product)} >
            <FaTrashAlt />
          </button>  
 
      </div>)

      )
      }
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total :{handleSumtotal}</h3>

        <Link to="/checkout/information">
        <button type="button">Continuar pedido</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Checkout;