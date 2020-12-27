import { RECEIVE_CURRENT_USER, 
        RECEIVE_USER_LOGOUT, 
        RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { isAuthenticated, user} = nextState
      isAuthenticated = !!action.currentUser,
      user = action.currentUser
      return nextState
      // return {
      //   ...nextState,
      //   isAuthenticated: !!action.currentUser,
      //   user: action.currentUser
      // };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isAuthenticated: true
      }
    default:
      return state;
  }
}