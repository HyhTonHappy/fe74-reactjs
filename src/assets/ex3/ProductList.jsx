import React, { Component } from 'react'
import Producitem from './Producitem'
export default class ProductList extends Component {
  render() {
    return (
      <div className='container'>
<div className='row'>
    <div className='col-3'>
        <Producitem/>
    </div>
    <div className='col-3'>
        <Producitem/>
    </div>
    <div className='col-3'>
        <Producitem/>
    </div>
</div>
      </div>
    )
  }
}
