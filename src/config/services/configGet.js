import Axios from "axios";
import {
  rootPathOnline,
  rootPathOffline,
  fetchLoading,
  fetchFulfiled,
  fetchRejected
} from "./config";

const configGet = (
  offline,
  online,
  typeLoading,
  typeFulfiled,
  typeRejected
) => dispatch => {
  dispatch(fetchLoading(typeLoading));
  return Axios.get(`${online ? rootPathOnline : rootPathOffline}${offline}`)
    .then(res => {
      setTimeout(() => {
        dispatch(fetchFulfiled(typeFulfiled, res.data.data));
      }, 1000);
    })
    .catch(err => {
      dispatch(fetchRejected(typeRejected, err));
    });
};

export default configGet;
