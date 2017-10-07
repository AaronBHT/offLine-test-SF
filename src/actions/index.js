function callRegisterApi(formData) {
  if(!(formData.email && formData.fullName && formData.companyName &&formData.password && formData.confirmPassword)) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('All fields have to be filled'));
      }, 2000);
    })
  }
  else if(formData.email === '123@test.com') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Email has been used!'));
      }, 2000);
    })
  } else if(formData.password !== formData.confirmPassword) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Password not match!'));
      }, 2000);
    })
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
      }, 2000);
    })
  }
}

export const SET_REGISTER_PENDING = 'set_register_pending';
export const SET_REGISTER_SUCCESS = 'set_register_success';
export const SET_REGISTER_ERROR ='set_register_error';

export function setRegisterPending(isRegisterPending) {
  return {
    type: SET_REGISTER_PENDING,
    isRegisterPending
  }
}

export function setRegisterSuccess(isRegisterSuccess) {
  return {
    type: SET_REGISTER_SUCCESS,
    isRegisterSuccess
  }
}

export function setRegisterError(registerError) {
  return {
    type: SET_REGISTER_ERROR,
    registerError
  }
}

export function register(formData) {
  return (dispatch) => {
    dispatch(setRegisterPending(true));
    dispatch(setRegisterSuccess(false));
    dispatch(setRegisterError(null));

    callRegisterApi(formData).then((response) => {
      dispatch(setRegisterPending(false));
      dispatch(setRegisterSuccess(true));
    })
    .catch((error) => {
      dispatch(setRegisterPending(false));
      dispatch(setRegisterError(error));
    })
  }
}
