import { generatorActions as actions } from "../actions";
export const generatorReducers = (state = {}, action) => {
  switch (action.type) {
    case actions.UPDATE_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case actions.FAIL_GENERATOR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SUCCESS_GENERATOR:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
        pseudoNumbers: action.payload.pseudoNumbers,
      };
    case actions.REQUEST_GENERATOR:
      return {
        ...state,
        loading: true,
      };
    case actions.SET_DEFAULT_GENERATOR:
      return {
        ...state,
        x0: 17,
        a: 101,
        c: 221,
        m: 17001,
      };
    case actions.SAVE_PSEUDO_NUMBERS:
      state.response &&
        localStorage.setItem("pseudo-numbers", JSON.stringify(state.pseudoNumbers));
      return state;
  }
};
