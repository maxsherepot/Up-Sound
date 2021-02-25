import { register, login } from '../../helpers/authorization';



export const Types = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',

  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_OUT: 'LOGIN_OUT',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};



export const getRegisterRequest = data => {
  return dispatch => {
    dispatch(startRegisterRequest());

    register(data)
      .then(response => {
        dispatch(onRegisterSuccess(response))
      })
      .catch(err => {
        dispatch(onRegisterFailure(err.message))
      })
  }
}


export const getLoginRequest = data => {
  return dispatch => {
    dispatch(startLoginRequest());

    login(data)
      .then(response => {
        localStorage.setItem("userData",
          JSON.stringify({ userId: response.userId, token: response.token }))

        dispatch(onLoginSuccess(response))
      })
      .catch(err => {
        dispatch(onLoginFailure(err.message))
      })
  }
}

////////// REGISTER
const startRegisterRequest = () => ({
  type: Types.REGISTER_REQUEST
});

const onRegisterSuccess = payload => ({
  type: Types.REGISTER_SUCCESS,
  payload
});

const onRegisterFailure = payload => ({
  type: Types.REGISTER_FAILURE,
  payload
});


////////// LOGIN
const startLoginRequest = () => ({
  type: Types.LOGIN_REQUEST
});

export const onLoginSuccess = payload => ({
  type: Types.LOGIN_SUCCESS,
  payload
});

export const onLogOut = () => ({
  type: Types.LOGIN_OUT,
});

const onLoginFailure = payload => ({
  type: Types.LOGIN_FAILURE,
  payload
});


