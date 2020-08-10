import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import auth from "../services/auth";
import { Button } from "@material-ui/core";

function ThirdPartyLogin() {
  const [loginStatus, setLoginStatus] = useState(auth.loginStatus());
  const [provider, setProvider] = useState(auth.provider());

  const googleSuccess = (rs) => {
    auth.login("google", JSON.stringify(rs));

    setLoginStatus(auth.loginStatus());
    setProvider(auth.provider());
  };

  const googleFailure = (rs) => {
    console.log("google failure", rs);
  };

  const logout = (rs) => {
    auth.logout();

    setLoginStatus(auth.loginStatus());
    setProvider(auth.provider());
  };

  const facebookResponse = (rs) => {
    auth.login("facebook", JSON.stringify(rs));

    setLoginStatus(auth.loginStatus());
    setProvider(auth.provider());
  };

  return (
    <div>
      <h3 className="text-2xl">ThirdPartyLogin</h3>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_APP_ID}
        buttonText="Login"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={"single_host_origin"}
        theme="dark"
        disabled={loginStatus}
      />

      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_APP_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
        theme="dark"
        disabled={!(loginStatus && provider === "google")}
      />

      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={facebookResponse}
        isDisabled={loginStatus}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={logout}
        disabled={!(loginStatus && provider === "facebook")}
      >
        FB Logout
      </Button>
    </div>
  );
}

export default ThirdPartyLogin;
