
/* funcional solo con facturacion activa en api de google


import { useState, useEffect } from "react";
import axios from "axios";

import React from 'react'

const useGoogleAddress = address => {

    const [map,setMap]=useState({})
    
    const API2=`https://maps.googleapis.com/maps/api/geocode/json?address=${address},+Mountain+View,+CA&key=AIzaSyDkhdooesTazmlMONn4JWwoRCpaeqdR3P8`
    
    useEffect(async () =>{
        const response= await axios(API2);
        setMap(response.data.results[0].geometry.location)
    },[]);
     return map;
};

export default useGoogleAddress
*/