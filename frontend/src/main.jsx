import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import { Auth0Provider } from "@auth0/auth0-react"; // Ensure Auth0Provider is imported

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-k8kc4sjnsixgofrh.us.auth0.com"
    clientId="Ike7nY2PYDboX2ZPJPmCyOTTEmpZdYlJ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* Add Router here to wrap the App */}
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
