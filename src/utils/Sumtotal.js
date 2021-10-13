
  const Sumtotal=(cart)=>{
    return cart.reduce((a,c)=>a+c.price,0);
  }

  export default Sumtotal