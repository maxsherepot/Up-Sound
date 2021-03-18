import React from 'react';
import FormButton from './FormButton';
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
                    errors={errors.email}
                />

                <FormInput
                    htmlFor="password"
                    label="Password"
                    value={form.password}
                    changeHandler={changeHandler}
                    type="password"
                    id="password"
                    name="password"
                    errors={errors.password}
                />

                <div className="pt-2">
                    <FormButton
                        title="Login"
                        onClick={loginHandler}
                        loading={loading}
                        className="btn specialBg loginButton"
                    />

                    <FormButton
                        title="Register"
                        onClick={registerHandler}
                        loading={loading}
                        className="btn btn-dark specialColor registerButton"
                    />
                </div>
            </form>
        </div>
    );
};


export default AuthForm