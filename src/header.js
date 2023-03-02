import React, { Component } from 'react'
import "./header.css";
export default class Header extends Component {
  render() {
    return (
    
<div className='header'>
<ul>
    <li>
        <div class="startB">
        <a>
          <span>Start Bootstrap</span>
        </a>
      </div>
    </li>

<li>
    
    <div class="home">
        <a>
          <span>Home</span>   
        </a>
      </div>
</li>

<li>
    <div class="about">
        <a>
          <span>About</span>
        </a>
      </div>
</li>

<li>
    <div class="contact">
        <a>
          <span>Contact</span>
        </a>
      </div>
</li>
      </ul>
      </div>
      
    );
  }
}

