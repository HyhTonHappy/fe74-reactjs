import React, { Component } from 'react'
import ProductList from './ProductList';
import Producitem from './Producitem';
import ProductDetail from './ProductDetail';
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='display-3 text-center'>Shopping Online</h1>
        <div className='text-center'>
<button className='btn btn-success'>Gio hang (0)</button>
        </div>
        
        <ProductList/>
        <ProductDetail/>
        <Producitem/>
      </div>
    )
  }
}
