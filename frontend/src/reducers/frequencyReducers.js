import { frequencyActions as actions } from "../actions";
export const frequencyReducers = (state = {}, action) => {
  switch (action.type) {
    case actions.UPDATE_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case actions.FAIL_FREQUENCY:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SUCCESS_FREQUENCY:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        response: action.payload,
      };
    case actions.REQUEST_FREQUENCY:
      return {
        ...state,
        loading: true,
      };
    case actions.SET_MODAL:
      return {
        ...state,
        messageModal: action.message,
        titleModal: action.title,
        showModalCall: action.show,
        modalAction: action.action,
        hideModal: action.hide,
      };
  }
};
