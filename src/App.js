import './App.css';
import Navbar from "./components/navbar"
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login"
import LogOut from "./components/LogOut/logOut"
import Welcome from './components/Welcome/Welcome'
import Chef from './components/Chef/Chef'
import Package from './components/Package/Package'
import Booking from './components/Booking/Booking'
import FilterChef from './components/FilterChef/FilterChef'
import AboutChef from './components/AboutChef/AboutChef'
import ChefProfile from './components/ChefProfile/ChefProfile'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp/signup';

const App = () => (

  <Router >
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Welcome />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/logOut' element={< LogOut/>}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
          <Route exact path='/chef' element={< Chef />}></Route>
          <Route exact path='/package' element={< Package />}></Route>
          <Route exact path='/booking' element={< Booking />}></Route>
          <Route exact path='/filterChef' element={< FilterChef />}></Route>
          <Route path="/aboutChef/:chefId" element={<AboutChef />} />
          <Route path="/chefProfile/:chefId" element={<ChefProfile />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  </Router>


);


export default App;
