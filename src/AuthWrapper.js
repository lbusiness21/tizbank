import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div id="preloader">
        <div className="row loader">
          <div className="loader-icon" />
        </div>
      </div> 
    );
  }
  if (error) {
    return (
      <div id="preloader">
        <div className="row loader">
          <div className="loader-icon" />
        </div>
      </div> 
    );
  }
  return <>{children}</>;
}


export default AuthWrapper;
