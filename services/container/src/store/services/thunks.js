import { fetchServices } from "../../lib/api/services";
import { addServices } from "./actions";

const getServices = () => async dispatch => {
  const services = await fetchServices();
  dispatch(addServices(services.data));
};

export { getServices };
