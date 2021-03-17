import React from 'react';



const FormInput = props => {
    const { changeHandler, registerHandler, loginHandler, loading, form } = props;


    return (
        <div className="formContainer">
            <form
                onSubmit={() => registerHandler()}>
                <div className="form-outline mb-2">
                    <input
                        value={form.email}
                        onChange={event => changeHandler(event)}
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                    />
                    <label className="form-label text-light" htmlFor="email">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        onChange={event => changeHandler(event)}
                        type="password"
                        value={form.password}
                        id="password"
                        className="form-control"
                        name="password"
                    />
                    <label className="form-label text-light" htmlFor="password">Password (min 6 symbols)</label>
                </div>

                <button
                    onClick={(event) => loginHandler(event)}
                    disabled={loading}
                    className="btn specialBg loginButton"
                >Login</button>

                <button
                    disabled={loading}
                    onClick={(event) => registerHandler(event)}
                    className="btn btn-dark specialColor registerButton"
                >Register</button>
            </form>
        </div>
    );
};


export default FormInput