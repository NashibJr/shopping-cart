import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleDelete } from './cartSlice';

const CartProducts = () => {
      const products = useSelector(state => state.cartProducts.productsInCart);
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const cartProducts = products.map((product) => {
            return (
                  <div key={product.id}>
                        <img src={product.image} width='210px' height='200px' alt=''/>
                        <p>Number of items: {product.quantity}</p>
                        <p>{product.name}</p>
                        <h3>$ {product.price}</h3>
                        <button type='button' className='button-content' onClick={() => {
                              dispatch(handleDelete({
                                    id: product.id,
                                    name: product.name,
                                    image: product.image,
                                    price: product.price,
                                    quantity: product.quantity
                              }));
                        }}>Delete</button>   
                  </div>
            );
      });
      return (
            <div>
                  <div className='header-content'>
                        <h1>Cart</h1>
                        <div className="button-content-back" onClick={() => {
                              navigate('/');
                        }}>back</div>
                  </div>
                  <div className='section-content'>
                      {cartProducts}  
                  </div>
            </div>
      );
}

export default CartProducts;