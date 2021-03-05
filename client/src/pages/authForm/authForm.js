import React, { useState } from 'react';
import { getRegisterRequest, getLoginRequest } from "../../store/auth/actions";
import { connect } from 'react-redux';
import Loader from '../../components/loader/Loader';
import FormInput from './FormInput';



const AuthForm = props => {
  const { user, error, loading } = props;
  const [form, setForm] = useState({ email: "", password: "" });

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
    <div className="container">

      {error && <h3 className="text-center text-danger">{error}</h3>}
      {user && <h3 className="text-center text-success">{user}</h3>}

      <div className="d-flex justify-content-center mt-5">
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
      </div>
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
