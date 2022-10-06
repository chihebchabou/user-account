import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const isAuthenticated = false;
  const loading = false;

  return isAuthenticated && !loading ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
