import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Product from '../components/product';

const ProductsList = () => {
      const products = useSelector(state => state.products);
      const _numberOfProducts = useSelector(state => state.cartProducts.numberOfProducts);
      const totalAmount = useSelector(state => state.cartProducts.totalPriceOfProducts);
      const navigate = useNavigate();
      const showproducts = products.map((product) => {
            return (
                  <Product key={product.id} image={product.image} name={product.name} price={product.price} id={product.id}/>
            );
      });
      return (
            <div>
                  <header className='header-content'>
                        <h1>Electronics</h1>
                        <div onClick={() => {navigate('/cart')}} className='button-content-back'>Cart <sup>{_numberOfProducts}</sup></div>
                  </header>
                  <section className='section-content'>{showproducts}</section>
                  <div>
                        <button type='button' className='button-content button'>Total: $ {totalAmount}</button>
                  </div>
            </div>
      );
}

export default ProductsList;