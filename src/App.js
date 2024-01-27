import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home';
import Details from './components/Details/Details';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' Component={Login}></Route>
                    <Route path='/home' Component={Home}></Route>
                    <Route path='/detail/:id' Component={Details}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
