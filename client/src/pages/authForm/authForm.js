import React, { useState, useEffect } from 'react';
import { getRegisterRequest, getLoginRequest } from "../../store/auth/actions";
import { connect } from 'react-redux';
import Loader from '../../components/loader/Loader';
import FormInput from '../../components/authForm/FormInput';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import showToasts from '../../assets/functions/toasts/showToasts';
import "./authForm.scss"



const AuthForm = props => {
  const { user, error, loading } = props;
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});


  useEffect(() => {
    showToasts({ errorMessage: error, successMessage: user })
  }, [error, user]);


  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };


  const validate = action => {
    const errors = {};
    const { email, password } = form;

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = 'Required';
    } else if (password.length < 6) {
      errors.password = "Too short, at least 6 symbols"
    }

    setErrors(errors)

    if (!Object.keys(errors).length && action === "loginHandler") {
      props.login(form)
    }

    if (!Object.keys(errors).length && action === "registerHandler") {
      props.register(form);
    }
  };

  const registerHandler = event => {
    event.preventDefault();
    validate("registerHandler")
  };

  
  const loginHandler = event => {
    event.preventDefault();
    validate("loginHandler")
  };



  return (
    <div className="container height100">
      <ToastContainer />
      {
        loading
          ?
          <Loader />
          :
          <FormInput
            form={form}
            changeHandler={changeHandler}
            registerHandler={registerHandler}
            loading={loading}
            loginHandler={loginHandler}
            errors={errors}
          />
      }
    </div >
  );
};


const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});


const mapDispatchToProps = dispatch => ({
  register: (form) => dispatch(getRegisterRequest(form)),
  login: (form) => dispatch(getLoginRequest(form)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)
