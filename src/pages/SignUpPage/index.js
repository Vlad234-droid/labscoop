import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import StepPersonal from './StepPersonal';
import StepOrganization from './StepOrganization';
import StepPassword from './StepPassword';

import Header from './Header';

import style from './index.module.scss';

function SignUpPage() {
  const slider = useRef();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    console.log('slider', slider.current);
    slider.current.slickNext();
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="page__sign-up">
      <Header step={currentStep} />
      <div className="wrapper">
        <div className={style['form-wrapper']}>
          <div className={style.form}>
            <Slider
              ref={slider}
              touchMove={false}
              infinite={false}
              speed={400}
              easing="ease-in-out"
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              initialSlide={0}
              // accessibility={false}
            >
              <StepPersonal nextStep={nextStep} />
              <StepOrganization nextStep={nextStep} />
              <StepPassword />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;