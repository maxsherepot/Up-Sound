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
      .then(res => {
        dispatch(onRegisterSuccess(res))
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
      .then(res => {
        localStorage.setItem("userData",
          JSON.stringify({
            userId: res.userId, token: res.token, email: data.email
          }))
        dispatch(onLoginSuccess(res))
      })
      .catch(err => {
        dispatch(onLoginFailure(err.message))
      })
  }
}

export const onLogOut = () => ({
  type: Types.LOGIN_OUT,
});



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


const startLoginRequest = () => ({
  type: Types.LOGIN_REQUEST
});

const onLoginSuccess = payload => ({
  type: Types.LOGIN_SUCCESS,
  payload
});

const onLoginFailure = payload => ({
  type: Types.LOGIN_FAILURE,
  payload
});


