import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <>
      <Router>
        {/* <Routes> */}

          <ResumeProvider>
            {/* <Navbar /> */}
            {/* <Header /> */}
            <Main />
            {/* <Switch> */}
            {/* <Route path="/login" Component={<Login/>} /> */}
            {/* <Route path="/" component={Main} /> */}
            {/* </Switch> */}
            <Footer />
          </ResumeProvider>
        {/* </Routes> */}
      </Router>
    </>
  );
}

export default App;
