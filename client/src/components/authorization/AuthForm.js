import React from 'react';
import FormInput from './FormInput';



const AuthForm = props => {
    const { changeHandler, registerHandler, loginHandler, loading, form, errors } = props;


    return (
        <div className="formContainer">
            <form
                onSubmit={() => registerHandler()}>

                <FormInput
                    htmlFor="email"
                    label="Email address"
                    value={form.email}
                    changeHandler={changeHandler}
                    type="email"
                    id="email"
                    name="email"
                    errors={errors.email} />

                <FormInput
                    htmlFor="password"
                    label="Password"
                    value={form.password}
                    changeHandler={changeHandler}
                    type="password"
                    id="password"
                    name="password"
                    errors={errors.password} />

                <div className="pt-2">
                    <button
                        onClick={event => loginHandler(event)}
                        disabled={loading}
                        className="btn specialBg loginButton"
                    >Login</button>

                    <button
                        disabled={loading}
                        onClick={event => registerHandler(event)}
                        className="btn btn-dark specialColor registerButton"
                    >Register</button>
                </div>
            </form>
        </div>
    );
};


export default AuthForm