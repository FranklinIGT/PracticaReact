import React from 'react';
import '../styles/components/Information.css';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { useForm } from 'react-hook-form';


const Information = () => {

  const {state:{cart},addToBuyer}=React.useContext(AppContext);
  const {register, errors, handleSubmit} = useForm();
  const [itemsCart,setItems]= React.useState([]);
  const  history= useHistory()
  
  const onSubmit = (data) => {
    const buyer =data;
    addToBuyer(buyer);
    history.push('/checkout/payment')
  }

  const cartReduce=React.useMemo( ()=>{    
    const indexed=cart.reduce((acc,item)=>{
    let ref=acc.findIndex(el=>el.id===item.id);
    if(ref<0){
      acc.push({id:item.id ,title:item.title, quantity:1, price:item.price})
    }else{
      acc[ref].quantity++
      acc[ref].price=item.price*acc[ref].quantity
    } 
    return acc
    },[])
    return indexed
  },
  )

  React.useEffect(()=>{
    setItems(cartReduce)
  },[cart]);
  
  return (
    <div className="Information">
    <div className="Information-content">
      <div className="Information-head">
        <h2>Contact Information:</h2>
      </div>
      <div className="Information-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Full Name
            <input type="text"  {...register("name")}/>
          </label>
          <label htmlFor="email">
            Email
            <input type="text" {...register("email")}/>
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text" {...register("address")}/>
          </label>
          <label htmlFor="apto">
            APT
            <input type="text" {...register("apto")} />
          </label>
          <label htmlFor="country">
            Country
            <input type="text" {...register("country")} />
          </label>
          <label htmlFor="state">
            State
            <input type="text" {...register("state")} />
          </label>
          <label htmlFor="city">
            City
            <input type="text" {...register("city")} />
          </label>
          <label htmlFor="cp">
            Postal Code
            <input type="text" {...register("cp")} />
          </label>
          <label htmlFor="phone">
            Phone
            <input type="text" {...register("phone")} />
          </label>
               <input className="button" type="submit" value="pay"/>
        </form>
      </div>
      <div className="Information-buttons">
        <Link to="/checkout">
        <div className="Information-back">Go Back</div>
        </Link>
         
        
       
        
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Order Summary:</h3>
      {itemsCart.map(item=>(
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.quantity}</h4>
              <h4>{item.title}</h4>
              <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

    

  )

  
};

export default Information;