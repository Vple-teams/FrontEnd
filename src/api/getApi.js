import React from 'react';
import axios from "axios";



export async function getApi() {
    const red = await axios.get('https://vple-backend.all.gagark.shop/v2//api/recommand/restaurant');
    console.log(red.data);
    return red.data;
}