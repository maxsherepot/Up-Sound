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

  useEffect(() => {
    showToasts({ errorMessage: error, successMessage: user })
  }, [error, user]);

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = event => {
    event.preventDefault();
    props.register(form);
  };

  const loginHandler = event => {
    event.preventDefault();
    props.login(form);
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
