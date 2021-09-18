import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import StepPersonal from './StepPersonal';
import StepOrganization from './StepOrganization';
import StepPassword from './StepPassword';
import Header from './Header';
import style from './index.module.scss';
import { actions } from '../../core/services/customers';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Notification from '../../components/Notification';
function SignUpPage() {
  const slider = useRef();
  const dispatch = useDispatch();
  const [POSTInfo, setPOSTInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const history = useHistory();

  const { registerCustomer } = bindActionCreators(actions, dispatch);

  const [valuesToSignUp, setValuesToSignUp] = useState({
    email: '',
    name: '',
    last_name: '',
    password: '',
    phone: '',
    country: 'US',
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

  const onSubmit = (data) => {
    setValuesToSignUp((prev) => ({
      ...prev,
      password: data.password,
    }));
  };

  useEffect(() => {
    if (valuesToSignUp.password) {
      setLoading(true);
      registerCustomer(valuesToSignUp).then((data) => {
        setLoading(false);
        if (data.error) {
          setErrorText(data.error.message.replace('Error: ', ''));
          setError(true);
        } else {
          history.push('/sign-in');
        }
      });
    }
  }, [valuesToSignUp]);

  return (
    <>
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
                <StepPersonal
                  nextStep={nextStep}
                  setValuesToSignUp={setValuesToSignUp}
                  valuesToSignUp={valuesToSignUp}
                />
                <StepOrganization
                  nextStep={nextStep}
                  setValuesToSignUp={setValuesToSignUp}
                  valuesToSignUp={valuesToSignUp}
                />
                <StepPassword
                  setValuesToSignUp={setValuesToSignUp}
                  setPOSTInfo={setPOSTInfo}
                  onSubmit={onSubmit}
                  loading={loading}
                  setLoading={setLoading}
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Notification
        error={error}
        setError={setError}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
        errorText={errorText}
      />
    </>
  );
}

export default SignUpPage;
