import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div className='bg-white shadow rounded-lg'>
<table className='table'>
    <thead>
        <tr>
            <th>INX</th>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>TOTAL</th>
            <th>ACTION</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Adidas</td>
            <td>
                <img src='' alt='' />
            </td>
            <td>
<button className='btn btn-info'> - </button>
            </td>
        </tr>
    </tbody>
</table>
      </div>
    )
  }
}
