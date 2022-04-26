import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
      const {SingInWithGoogle} = useFirebase();
      return (
            <div>
                  <h1>Welcome to Login</h1>
                 <div style={{margin:"20px"}}> 
                 <button onClick={SingInWithGoogle} >Sing In Google</button>
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