import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensures modal JS is included
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from './screens/home/HomeScreen';
import Wishlist from './screens/wishlist/Wishlist';
import Header from './components/header/Header';
import { Login } from './screens/admin/Login';
import AdminDashboard from './screens/admin/AdminDashboard';
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState(Cookies.get('jwt'));

  useEffect(() => {
    // Update the token state whenever the cookie changes
    const interval = setInterval(() => {
      const jwt = Cookies.get('jwt');
      if (jwt !== token) {
        setToken(jwt);
      }
    }, 500); // Poll every 500ms for cookie changes

    return () => clearInterval(interval);
  }, [token]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeScreen />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/admin" element={token ?  <Navigate to="/admin/dashboard" /> : <Login /> }   />
        <Route path="/admin/dashboard" element={token ?  <AdminDashboard /> : <Navigate to="/admin" /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
