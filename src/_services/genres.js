import API from "../_api";

export const getGenres = (async) => {
  const { data } = API.get("/genres");
  return data.data;
};

export default API;
