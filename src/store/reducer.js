import * as actionTypes from "./actions";

const initialState = {
  userInfo: {
    firstname: "",
    lastname: "",
    email: ""
  },
  privacy: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_NAME: {
      const stateCopy = Object.assign({}, { ...state });
      for (let name in action.username) {
        stateCopy.userInfo[name] = action.username[name];
      }

      return {
        ...state,
        userInfo: {
          ...stateCopy.userInfo
        }
      };
    }

    case actionTypes.SET_USER_EMAIL: {
      const stateCopy = Object.assign({}, { ...state });
      stateCopy.userInfo.email = action.email;
      return {
        ...stateCopy
      };
    }

    case actionTypes.SET_PRIVACY_CHECKED:
      return {
        ...state,
        privacy: action.checked
      };

    default:
      return state;
  }
};

export default reducer;
