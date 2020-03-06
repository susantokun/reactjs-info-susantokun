import InitialState from "../constants/initialState";
import actionTypes from "./actionTypes";

const rootReducer = (state = InitialState, action) => {
  // console.log("action type => ", action.type);
  switch (action.type) {
    // * PORTFOLIOS START
    // * GET
    case actionTypes.GET_PORTFOLIOS_LOADING:
      return {
        ...state,
        portfoliosLoading: action.loading
      };

    case actionTypes.GET_PORTFOLIOS_FULFILLED:
      return {
        ...state,
        portfolios: action.payload,
        portfoliosLoading: action.loading
      };
    case actionTypes.GET_PORTFOLIOS_REJECTED:
      return {
        ...state,
        error: action.payload,
        portfoliosLoading: action.loading
      };
    // * PORTFOLIOS END

    // * EXPERIENCES START
    // * GET
    case actionTypes.GET_EXPERIENCES_LOADING:
      return {
        ...state,
        experiencesLoading: action.loading
      };

    case actionTypes.GET_EXPERIENCES_FULFILLED:
      return {
        ...state,
        experiences: action.payload,
        experiencesLoading: action.loading
      };
    case actionTypes.GET_EXPERIENCES_REJECTED:
      return {
        ...state,
        error: action.payload,
        experiencesLoading: action.loading
      };
    // * EXPERIENCES END

    // * CERTIFICATES START
    // * GET
    case actionTypes.GET_CERTIFICATES_LOADING:
      return {
        ...state,
        certificatesLoading: action.loading
      };

    case actionTypes.GET_CERTIFICATES_FULFILLED:
      return {
        ...state,
        certificates: action.payload,
        certificatesLoading: action.loading
      };
    case actionTypes.GET_CERTIFICATES_REJECTED:
      return {
        ...state,
        error: action.payload,
        certificatesLoading: action.loading
      };
    // * CERTIFICATES END

    // * CONFIGURATIONS START
    // * GET
    case actionTypes.GET_CONFIGURATIONS_LOADING:
      return {
        ...state,
        configurationsLoading: action.loading
      };

    case actionTypes.GET_CONFIGURATIONS_FULFILLED:
      return {
        ...state,
        configurations: action.payload,
        configurationsLoading: action.loading
      };
    case actionTypes.GET_CONFIGURATIONS_REJECTED:
      return {
        ...state,
        error: action.payload,
        configurationsLoading: action.loading
      };
    // * CONFIGURATIONS END

    default:
      return state;
  }
};

export default rootReducer;
