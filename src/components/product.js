import React from'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const Product = ({ image, name, price, id, quantity }) => {
      const dispatch = useDispatch();
      return (
            <div>
                  <img src={image} width='210px' height='200px' alt=''/>
                  <p>{name}</p>
                  <h3>$ {price}</h3>   
                  <button type='button' className='button-content' onClick={() => {
                        dispatch(addToCart({
                              id,
                              name,
                              price,
                              quantity,
                              image 
                        }));
                  }}>Add to cart</button>               
            </div>
      );
}

export default Product;