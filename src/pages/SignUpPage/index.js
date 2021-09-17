import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import StepPersonal from './StepPersonal';
import StepOrganization from './StepOrganization';
import StepPassword from './StepPassword';
import Header from './Header';
import style from './index.module.scss';
import { actions } from '../../core/services/customers';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

function SignUpPage() {
  const slider = useRef();
  const dispatch = useDispatch();
  const [POSTInfo, setPOSTInfo] = useState(false);

  const { registerCustomer } = bindActionCreators(actions, dispatch);

  const [valuesToSignUp, setValuesToSignUp] = useState({
    email: '',
    name: '',
    last_name: '',
    password: '',
    phone: '',
    country: 'USA',
    organization: {
      name: '',
      type: '',
      position: '',
      profit: true,
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    console.log('slider', slider.current);
    slider.current.slickNext();
    setCurrentStep((prev) => prev + 1);
  };

  if (POSTInfo) {
    registerCustomer(valuesToSignUp).then((data) => console.log('data from POST', data));
  }

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
              <StepPersonal nextStep={nextStep} setValuesToSignUp={setValuesToSignUp} valuesToSignUp={valuesToSignUp} />
              <StepOrganization
                nextStep={nextStep}
                setValuesToSignUp={setValuesToSignUp}
                valuesToSignUp={valuesToSignUp}
              />
              <StepPassword setValuesToSignUp={setValuesToSignUp} setPOSTInfo={setPOSTInfo} setPOSTInfo={setPOSTInfo} />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
