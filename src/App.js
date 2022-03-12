import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route } from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';

function App() {
  return (
    <BrowserRouter>
      <style>{'body { background-image: linear-gradient(to right, violet , darkviolet); }'}</style>
      <div className='App'>
        <Navbar />
        <Route path='/' exact>
          <Homescreen />
        </Route>
        <Route path='/cart' exact>
          <Cartscreen />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
