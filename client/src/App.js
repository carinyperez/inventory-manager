import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import logo from './tim_logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<img src={logo} alt='logo'/>
		<a href='/store'>Preview your store</a>
		<a href='/inventory'>Manage your inventory</a>
	  </header>
	  <Router>
		<Routes>
			<Route path='/' element={<HomePage/>} ></Route>
		</Routes>
	  </Router>
    </div>
  );
}

export default App;
