import React from 'react';
import {getAuth} from "firebase/auth";
import app from "../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";




const auth = getAuth(app);
const RequireAuth = ({ children }) => {
      const [user] = useAuthState(auth);
      const location = useLocation();
      if (!user) {
           return <Navigate to="/login" state={{ from: location }} replace />;

      }
      return children;
};

export default RequireAuth;