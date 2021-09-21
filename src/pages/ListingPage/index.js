import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import style from './style.module.scss';
import { ArrowBread } from '../../components/icons';
import { Link } from 'react-router-dom';
import { imgsCats } from './config';
import { NextSlider, PrevSlider } from '../../components/icons/';

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
    slidesToScroll: 2,
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
        <div className={style.popular_categories}>
          <div className={style.title}>
            <h3>Popular Categories</h3>
            <Link to="/">All Categories</Link>
          </div>
          <div className={style.slider_outer}>
            <Slider {...settings}>
              {imgsCats.map((item) => (
                <div className={style.card}>
                  <img src={item.img} alt="card" />
                  <h4 className={style.title}>{item.title}</h4>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
