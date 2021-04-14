import * as React from 'react';

const NotAuthorized = () => (
  <div className="oidc-not-authorized">
    <div className="oidc-not-authorized__container">
      <h1 className="oidc-not-authorized__title">Authorization</h1>
      <p className="oidc-not-authorized__content">
        You are not authorized to access this resource.
      </p>
    </div>
  </div>
);

export default NotAuthorized;
