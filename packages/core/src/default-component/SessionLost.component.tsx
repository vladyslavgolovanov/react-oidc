import React, { FC, MouseEventHandler } from 'react';
import withCustomRouter, { ReactOidcHistory } from '../routes/withRouter';
import { getUserManager, authenticateUser } from '../services';

type SessionLostProps = {
  onAuthenticate?: MouseEventHandler;
};

export const SessionLost: FC<SessionLostProps> = ({ onAuthenticate }) => (
  <div className="oidc-session-lost">
    <div className="oidc-session-lost__container">
      <h1 className="oidc-session-lost__title">Session timed out</h1>
      <p className="oidc-session-lost__content">
        Your session has expired. Please re-authenticate.
      </p>
      <button className="oidc-session-lost__button" type="button" onClick={onAuthenticate}>
        Re-authenticate
      </button>
    </div>
  </div>
);

type SessionLostContainerProps = {
  location: Location;
  history?: ReactOidcHistory;
};

export const SessionLostContainer: FC<SessionLostContainerProps> = ({ location, history }) => {
  const callbackPath = location.search.replace('?path=', '');
  const onAuthenticate = () => {
    authenticateUser(getUserManager(), location, history)(true, callbackPath);
  };
  return <SessionLost onAuthenticate={onAuthenticate} />;
};

export default withCustomRouter(SessionLostContainer);
