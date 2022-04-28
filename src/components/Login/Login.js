import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {getAuth} from "firebase/auth";
import app from "../../firebase.init";
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

const Login = () => {
     /*  const {SingInWithGoogle} = useFirebase(); */
     const [SignInWithGoogle, user] = useSignInWithGoogle(auth);
     const location = useLocation();
     const navigate = useNavigate();

      const from = location?.state?.from?.pathname || "/";
     const handleGoogleSingIn = () => {
           SignInWithGoogle()
           .then(() => {
                   navigate(from, { replace: true });
           })
     }
      return (
            <div>
                  <h1>Welcome to Login</h1>
                 <div style={{margin:"20px"}}> 
                 <button onClick={handleGoogleSingIn} >Sign In Google</button>
                 </div>
                  <form>
                        <input type="email" placeholder="your email"/> 
                        <br />
                        <input type="password" name=""  id="" placeholder="your password"/> 
                        <br />
                        <input type="submit" value="Login" />                
                  </form>
            </div>
      );
};

export default Login;