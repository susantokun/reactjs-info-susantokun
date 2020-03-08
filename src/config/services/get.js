import configGet from "./configGet";
import actionTypes from "../redux/actionTypes";

const getDemoContents = () =>
  configGet(
    "demo/contents",
    true,
    actionTypes.GET_DEMOS_LOADING,
    actionTypes.GET_DEMOS_FULFILLED,
    actionTypes.GET_DEMOS_REJECTED
  );

const getPortfolios = () =>
  configGet(
    "info/portfolios",
    true,
    actionTypes.GET_PORTFOLIOS_LOADING,
    actionTypes.GET_PORTFOLIOS_FULFILLED,
    actionTypes.GET_PORTFOLIOS_REJECTED
  );

const getExperiences = () =>
  configGet(
    "info/experiences",
    true,
    actionTypes.GET_EXPERIENCES_LOADING,
    actionTypes.GET_EXPERIENCES_FULFILLED,
    actionTypes.GET_EXPERIENCES_REJECTED
  );

const getCertificates = () =>
  configGet(
    "info/certificates",
    true,
    actionTypes.GET_CERTIFICATES_LOADING,
    actionTypes.GET_CERTIFICATES_FULFILLED,
    actionTypes.GET_CERTIFICATES_REJECTED
  );

const getConfigurations = () =>
  configGet(
    "info/configurations",
    true,
    actionTypes.GET_CONFIGURATIONS_LOADING,
    actionTypes.GET_CONFIGURATIONS_FULFILLED,
    actionTypes.GET_CONFIGURATIONS_REJECTED
  );

const GET = {
  getDemoContents,
  getPortfolios,
  getExperiences,
  getCertificates,
  getConfigurations
};

export default GET;
