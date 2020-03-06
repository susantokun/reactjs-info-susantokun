import configGet from "./configGet";
import actionTypes from "../redux/actionTypes";

const getPortfolios = () =>
  configGet(
    "portfolios",
    true,
    actionTypes.GET_PORTFOLIOS_LOADING,
    actionTypes.GET_PORTFOLIOS_FULFILLED,
    actionTypes.GET_PORTFOLIOS_REJECTED
  );

const getExperiences = () =>
  configGet(
    "experiences",
    true,
    actionTypes.GET_EXPERIENCES_LOADING,
    actionTypes.GET_EXPERIENCES_FULFILLED,
    actionTypes.GET_EXPERIENCES_REJECTED
  );

const getCertificates = () =>
  configGet(
    "certificates",
    true,
    actionTypes.GET_CERTIFICATES_LOADING,
    actionTypes.GET_CERTIFICATES_FULFILLED,
    actionTypes.GET_CERTIFICATES_REJECTED
  );

const getConfigurations = () =>
  configGet(
    "configurations",
    true,
    actionTypes.GET_CONFIGURATIONS_LOADING,
    actionTypes.GET_CONFIGURATIONS_FULFILLED,
    actionTypes.GET_CONFIGURATIONS_REJECTED
  );

const GET = {
  getPortfolios,
  getExperiences,
  getCertificates,
  getConfigurations
};

export default GET;
