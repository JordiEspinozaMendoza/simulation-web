import { smirnovActions as actions } from "../actions";
export const smirnovReducers = (state = {}, action) => {
  switch (action.type) {
    case actions.UPDATE_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case actions.FAIL_SMIRNOV:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SUCCESS_SMIRNOV:
      return {
        ...state,
        loading: false,
        response: {
          max: action.payload["max"],
          message: action.payload["message"],
          about: action.payload["about"],
        },
      };
    case actions.REQUEST_SMIRNOV:
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
