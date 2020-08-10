const auth = {
  provider: () => {
    return localStorage.getItem("provider");
  },
  loginStatus: () => {
    return !!localStorage.getItem("provider");
  },
  login: (provider, data) => {
    localStorage.setItem("provider", provider);
    localStorage.setItem("user", data);
  },
  logout: () => {
    localStorage.removeItem("provider");
    localStorage.removeItem("user");
  },
};

export default auth;
