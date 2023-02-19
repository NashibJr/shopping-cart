import { createSlice, nanoid } from '@reduxjs/toolkit';
import fridge from '../images/fridge.jpg';
import ironbox from '../images/ironbox.jpg';
import phone from '../images/phone.jpg';
import tv from '../images/tv.jpg';
import woofer from '../images/woofer.jpg';

const initialState = [
      {name: 'Television', id: nanoid(), price: 250, image: tv},
      {name: 'Woofer', id: nanoid(), price: 50, image: woofer},
      {name: 'Smart phone', id: nanoid(), price: 300, image: phone},
      {name: 'Fridge', id: nanoid(), price: 1250, image: fridge},
      {name: 'Iron box', id: nanoid(), price: 20, image: ironbox}
];
const productsSlice = createSlice({
      name: 'products',
      initialState,
      reducers: {}
});

export default productsSlice;