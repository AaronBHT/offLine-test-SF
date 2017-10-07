import { SET_REGISTER_PENDING, SET_REGISTER_SUCCESS, SET_REGISTER_ERROR } from '../actions';

const initialState = {
  email: '',
  fullName: '',
  companyName: '',
  password: '',
  confirmPassword: '',
  isRegisterPending: false,
  isRegisterSuccess: false,
  registerError: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REGISTER_PENDING:
      return {
        ...state,
        isRegisterPending: action.isRegisterPending
      }
    case SET_REGISTER_SUCCESS:
      return {
        ...state,
        isRegisterSuccess: action.isRegisterSuccess
      }
    case SET_REGISTER_ERROR:
      return {
        ...state,
        registerError: action.registerError
      }
    default:
      return state;
    }
}
