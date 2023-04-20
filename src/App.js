import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Linkpage from './Link';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Linkpage/>}/>
      <Route path='/search' element={<Home/>}>
   
      </Route>
    </Routes>
    
    </BrowserRouter>



    </div>
  );
}

export default App;
