import './App.css';
import Navbar from "./components/navbar"
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login"
import Welcome from './components/Welcome/Welcome'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (

  <Router >
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
      </div>
      <Routes>
        <Route exact path='/' element={< Welcome />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
      </Routes>
      <Footer />
    </div>
  </Router>


);


export default App;
