import React from 'react';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import Sumtotal from '../utils/Sumtotal';
import { useHistory } from 'react-router-dom';


const Payments = () => {
  const{state:{cart,buyer},addNewOrder}=React.useContext(AppContext);
  const  history= useHistory()
  const paypalOptions = {
    clientId:process.env.REACT_APP_CLIENT_ID,
    intent: 'capture',
    };


  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumtotal=React.useMemo(()=>{
    return Sumtotal(cart)
   },[cart])

   const handlePaymentSuccess = (data) => {
    
    console.log(data);

  
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };



  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3> pedido:</h3>
        {cart.map((item)=>(
          <div className='Payment-item' key={item.cartId}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>${' '}{item.price}</span>
            </div>
          </div>
        ))
        }

         
          <div className="Payment-button">
            <PayPalButton
              options={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumtotal}
              onPaymentStart={() => console.log('Start Payment')}
              onSuccess={(data) => handlePaymentSuccess(data)}
              catchError={(error) => console.log(error)}
              onCancel={(data) => console.log(data)}
            />
          </div>
         
        
      </div>
      <div></div>
    </div>
  );
};

export default Payments;