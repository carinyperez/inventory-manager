import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Store from './pages/Store';
import logo from './tim_logo.svg';
import Inventory from './pages/Inventory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<a href='/'><img src={logo} alt='logo'/></a>
		<a href='/store'>Preview your store</a>
		<a href='/inventory'>Manage your inventory</a>
	  </header>
	  <Router>
		<Routes>
			<Route exact path='/' element={<HomePage/>} ></Route>
			<Route exact path='/store' element={<Store/>}></Route>
			<Route exact path='/inventory' element={<Inventory/>}></Route>
		</Routes>
	  </Router>
    </div>
  );
}

export default App;
