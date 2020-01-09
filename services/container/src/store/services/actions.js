export const ADD_SERVICES = "ADD_SERVICES";

export const addServices = services => {
  return {
    type: ADD_SERVICES,
    payload: services
  };
};
