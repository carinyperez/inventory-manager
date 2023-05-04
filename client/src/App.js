import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Store from './pages/Store';
import logo from './tim_logo.svg';
import Inventory from './pages/Inventory';
import NotFound from './pages/NotFound';

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
			<Route exact path='/' element={<HomePage/>}/>
			<Route exact path='/store' element={<Store/>}/>
			<Route exact path='/inventory' element={<Inventory/>}/>
			<Route exact path='/*' element={<NotFound/>}/>
		</Routes>
	  </Router>
    </div>
  );
}

export default App;
