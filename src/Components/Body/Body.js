import React, { Component } from 'react'
import resim1  from "../Header/images/cat.jpg"
import resim2  from "../Header/images/dogs.jpg"
import resim3  from "../Header/images/bird.jpg"

import "./Body.css"

class Body extends Component {

  render() {
    
    return (
      <div>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={resim2} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={resim1} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={resim3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      


      </div>
    )
  }
}
export default  Body