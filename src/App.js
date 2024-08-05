import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingpage/landinpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupFormPage from './components/landingpage/signup';
import Login from './components/landingpage/login';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<LandingPage/>} />
                  <Route path='/signup' element={<SignupFormPage/>}/>
                  <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
