import './App.css';
import Navbar from "./components/navbar"
import Footer from "./components/Footer/footer";

  const App = () => (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
  

export default App;
