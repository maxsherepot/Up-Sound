import React, { useState } from 'react';
import { getRegisterRequest } from "../../store/auth/actions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader';



const Form = ({ changeHandler, registerHandler, loading, form }) => {
  return (
    <form
      onSubmit={() => registerHandler()}
      className="mt-5">
      <div className="form-outline mb-2">
        <input
          value={form.email}
          required
          onChange={event => changeHandler(event)}
          type="email"
          id="email"
          className="form-control"
          name="email"
        />
        <label className="form-label" htmlFor="email">Email address</label>
      </div>

      <div className="form-outline mb-4">
        <input
          required
          onChange={event => changeHandler(event)}
          type="password"
          value={form.password}
          id="password"
          className="form-control"
          name="password"
        />
        <label className="form-label" htmlFor="password">Password</label>
      </div>

      <button
        disabled={loading}
        onClick={(event) => registerHandler(event)}
        className="btn btn-dark"
      >Регістрація</button>

      <button
        disabled={loading}
        className="btn btn-primary"
      >Вхід</button>
    </form>
  );
};


const AuthForm = props => {
  const { user, error, loading } = props;
  const [form, setForm] = useState({ email: "", password: "" });


  console.log(`
  user ${user}
  error ${error}
  loading ${loading}`)


  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };


  const registerHandler = event => {
    event.preventDefault();
    props.register(form);
  };


 

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        {
          loading
            ?
            <Loader />
            :
            <Form
              form={form}
              changeHandler={changeHandler}
              registerHandler={registerHandler}
              loading={loading}
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
});


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthForm)
);
