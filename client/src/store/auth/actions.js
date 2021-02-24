import { register } from '../../helpers/authorization';



export const Types = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE'
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


