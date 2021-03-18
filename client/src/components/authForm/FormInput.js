import React from 'react';



const FormInput = props => {
    const { changeHandler, registerHandler, loginHandler, loading, form, errors } = props;


    return (
        <div className="formContainer">
            <form
                onSubmit={() => registerHandler()}>
                <div className="form-outline mb-4">
                    <label className="form-label text-light mb-0" htmlFor="email">Email address</label>
                    <input
                        value={form.email}
                        onChange={event => changeHandler(event)}
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                    />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>

                <div className="form-outline mb-5">
                    <label className="form-label text-light mb-0" htmlFor="password">Password</label>
                    <input
                        onChange={event => changeHandler(event)}
                        type="password"
                        value={form.password}
                        id="password"
                        className="form-control"
                        name="password"
                    />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>

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
            </form>
        </div>
    );
};


export default FormInput