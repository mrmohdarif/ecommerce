import './App.css';
import Catitem from './compoent/catitem/Catitem';
import Singleproduct from './compoent/singleproduct/Singleproduct';
import Home from './section/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/category/:id" element={<Catitem/>}/>
  <Route path="/product/:id" element={<Singleproduct/>}/>
 </Routes>
 </BrowserRouter>
    
    </div>
  );
}

export default App;
