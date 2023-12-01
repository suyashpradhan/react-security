/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<AppProvider>
				<App />
			</AppProvider>
		</RouterProvider>
	</React.StrictMode>,
);
