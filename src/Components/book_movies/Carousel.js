import React from 'react';
import carousel1 from '../../Images/istockphoto-921532564-612x612.jpg'

function Carousel(){
    return <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" style={{height:'350px'}} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703248143141_1240x300.jpg" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" style={{height:'350px'}} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703162228341_web.jpg" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" style={{height:'350px'}} src={carousel1} alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
};
export default Carousel;