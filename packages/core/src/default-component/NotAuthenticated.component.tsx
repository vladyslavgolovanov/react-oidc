import * as React from 'react';

const NotAuthenticated = () => (
  <div className="oidc-not-authenticated">
    <div className="oidc-not-authenticated__container">
      <h1 className="oidc-not-authenticated__title">Authentication</h1>
      <p className="oidc-not-authenticated__content">You are not authenticated.</p>
    </div>
  </div>
);

export default NotAuthenticated;
