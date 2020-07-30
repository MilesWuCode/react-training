import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8888",
  headers: {
    "content-type": "application/json",
  },
});

export default {
  all: (params) =>
    instance({
      method: "GET",
      url: "/posts",
      ...params,
    }),
  find: (params) =>
    instance({
      method: "GET",
      url: "/posts",
      ...params,
    }),
  create: (params) =>
    instance({
      method: "POST",
      url: "/posts",
      ...params,
    }),
  update: (params) =>
    instance({
      method: "PUT",
      url: "/posts",
      ...params,
    }),
  delete: (id) =>
    instance({
      method: "DELETE",
      url: "/posts/" + id,
    }),
};
