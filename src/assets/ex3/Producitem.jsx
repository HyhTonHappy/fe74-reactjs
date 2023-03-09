import React, { Component } from 'react'

export default class Producitem extends Component {
  render() {
    return (
      <div className='card p-3 mb-4'>
<img src='' alt=''></img>
<h4>Adidas Ultraboost</h4>
<p>Price: </p>
<div className='d-flex justidy-content-center'>
<button className='btn btn-danger me-3'>Detail</button>
<button className='btn btn-info'>Cart</button>
</div>
      </div>
    )
  }
}
