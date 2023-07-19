/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const userInitialState = {
  user: null,
  isAuthenticated: false,
};

function userReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'login':
      return { ...state, user: payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error('Unknown action(userReducer)');
  }
}

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    userReducer,
    userInitialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: 'login', payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider value={(user, isAuthenticated, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider');
}

export { AuthProvider, useAuth };
