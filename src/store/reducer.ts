import IAction from "../type/action";
import IUser from "../type/user";
import user from "./user";

interface IState {
    user: IUser | null,
    token: string
}

const initialState: IState = {
    user: null,
    token: ""
}

const rootReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_TOKEN':
        return { ...state, token: action.payload };
      case 'LOGOUT':
        return { ...state, user: null, token: ""};
      default:
        // Return current state if the action type doesn't match
        return state;
    }
  };
  
  export default rootReducer;