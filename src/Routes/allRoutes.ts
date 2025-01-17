import React from 'react';

import Login from 'pages/Login/Login.jsx';
import ProductList from 'pages/Product/ListView';
import StockList from 'pages/Product/StockListView';
import Employee from 'pages/Worker/EmployeeList';

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  { path: '/', component: Login },

  { path: '/product-list', component: ProductList },
  { path: '/stock-list', component: StockList },

  { path: '/employee-list', component: Employee },
];

const publicRoutes = [
  // authentication
  { path: '/login', component: Login },
];

export { authProtectedRoutes, publicRoutes };
