import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import { ArrowBread } from '../../components/icons';
import { Link } from 'react-router-dom';
import { imgsCats } from './config';
import { NextSlider, PrevSlider, Appendorf, Schott } from '../../components/icons/';
import tablets from '../../assets/img/tablets.jpg';
import ampyla from '../../assets/img/ampyla.jpg';
import LabFavourites from '../../components/LabFavourites';
import allProd from '../../assets/img/allProd.jpg';
import style from './style.module.scss';

const ListingPage = () => {
  const slider = useRef();
  const [currentStep, setCurrentStep] = useState(0);
  const settings = {
    ref: slider,
    touchMove: false,
    speed: 400,
    easing: 'ease-in-out',
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <div
        className={style.prev}
        onClick={() => {
          slider.current.slickPrev();
          setCurrentStep((prev) => prev - 1);
        }}>
        <PrevSlider />
      </div>
    ),
    nextArrow: (
      <div
        className={style.next}
        onClick={() => {
          slider.current.slickNext();
          setCurrentStep((prev) => prev + 1);
        }}>
        <NextSlider />
      </div>
    ),
  };

  return (
    <div className={style.listing_container}>
      <div className="main_wrapper">
        <div className={style.breads}>
          <Breadcrumbs separator={<ArrowBread />}>
            <Link to="/listing">Life Science</Link>
            <Link to="/listing">Labware</Link>
          </Breadcrumbs>
          <h2 className={style.title}>Labware</h2>
        </div>
      </div>
      <div className="main_wrapper">
        <div className={style.popular_categories}>
          <div className={style.title}>
            <h3>Popular Categories</h3>
            <Link to="/">All Categories</Link>
          </div>
          <div className={style.slider_outer}>
            <Slider {...settings}>
              {imgsCats.map((item) => (
                <div className="card" key={item.id}>
                  <div className={style.inner_card}>
                    <img src={item.img} alt="card" />
                    <h4 className={style.title}>{item.title}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="main_wrapper">
        <div className={style.brands}>
          <div class={style.top_brands}>
            <div className={style.block}>
              <h2>Top Brands</h2>
              <Link to="/all-brands">See All</Link>
            </div>
          </div>
          <div className={style.logo_brands}>
            <div className={style.mult_brand}>
              <Schott />
            </div>
            <div className={style.mult_brand}>
              <Appendorf />
            </div>
            <div className={style.mult_brand}>
              <Schott />
            </div>
            <div className={style.mult_brand}>
              <Appendorf />
            </div>
          </div>
        </div>
      </div>
      <div className="main_wrapper">
        <div className={style.cards}>
          <div className={style.card_img}>
            <img className={style.tabl_img} src={tablets} alt="tablets" />
            <h2 className={style.title}>Science Samples</h2>
            <p className={style.sub_title}>DISCOVERY DELIVERED</p>
            <p className={style.text}>
              Make sure your lab is working with the most cost-effective, innovative products available.
            </p>
            <Button variant="outlined" color="primary" className={style.except}>
              Get Science Samples
            </Button>
            <h4>
              Exclusively for <span>Labscoop Enterprise</span> members
            </h4>
          </div>
          <div className={style.card_img}>
            <img className={style.tabl_img} src={ampyla} alt="ampyla" />
            <h2 className={style.title}>Working with RNA?</h2>
            <p className={style.sub_title}>Featured Product by Gerthosite</p>
            <p className={style.text}>Prevent RNase and DNase degredation with RNase and DNase free Nitrile gloves.</p>
            <h4>Starting at $16.00</h4>
          </div>
        </div>
      </div>

      <div className="main_wrapper">
        <LabFavourites />
      </div>

      <div className={style.browse}>
        <div className="main_wrapper">
          <div className={style.title}>
            <h2>Browse All Labware Products</h2>
            <Button variant="contained" color="primary" size="large" type="submit">
              Show All
            </Button>
          </div>
          <div className={style.all_products}>
            <img src={allProd} alt="allProd" />
            <div className={style.fade}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
