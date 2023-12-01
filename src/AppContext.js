/** @format */

import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AppProvider = ({ children }) => {
	const [authState, setAuthState] = useState({
		token: null,
		expiresAt: null,
		userInfo: {},
	});

	const setAuthInfo = ({ token, expiresAt, userInfo }) => {
		setAuthState({
			token,
			expiresAt,
			userInfo,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				authState,
				setAuthInfo,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
