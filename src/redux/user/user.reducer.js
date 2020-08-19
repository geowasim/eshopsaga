import UserActionTypes from "./user.types";

const INTIAL_STATE = {
  currentUser: null,
  error: null
  
}

const userReucer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReucer;




/**
 * const userReucer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
*? we turn .SET_CURRENT_USER: TO 
**   case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
**   case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
* becuser what we get back from this actions will be the user and we will set the current user
 */