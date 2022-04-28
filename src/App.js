import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home> }></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/order" element={
            <RequireAuth>
                <Order />
              </RequireAuth>
          }></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      
    </div>
  );
}
export default App;
