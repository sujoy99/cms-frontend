import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login"
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
