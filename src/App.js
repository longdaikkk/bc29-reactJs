import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
