import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import app from "../../firebase.init";
import {getAuth, signOut} from "firebase/auth";



const auth = getAuth(app);
const Header = () => {
      /* const {user, handleSingOut} = useFirebase(); */
      const [user] = useAuthState(auth);
      return (
            <div className="header">
                <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/product'>Product</Link> 
                  <Link to='/order'>Order</Link> 
                  <Link to='/register'>Register</Link>
                  {
                        user && <>
                        <Link to='/rasel'>Rasel</Link>
                        </>
                  }
                  <span>{user?.displayName && user.displayName}</span>
                  
                 { 
                       user?.uid 
                       ?
                       <button onClick={() => signOut(auth)}>Sing out</button>
                       :
                     <Link to='/login'>Login</Link> 
                  }
                
                </nav> 
            </div>
      );
};

export default Header;