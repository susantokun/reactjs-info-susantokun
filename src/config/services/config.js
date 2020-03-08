export const rootPathOffline = "http://127.0.0.1:8000/api/v1/";
export const rootPathOnline = "https://admin.susantokun.com/api/v1/";

export const fetchLoading = actionType => {
  return {
    type: actionType,
    loading: true
  };
};

export const fetchFulfiled = (actionType, data) => {
  return {
    type: actionType,
    payload: data,
    loading: false
  };
};

export const fetchRejected = (actionType, error) => {
  return {
    type: actionType,
    payload: error,
    loading: false
  };
};
