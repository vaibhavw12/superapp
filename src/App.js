import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Register} from './components/register/Register'
import { Category } from './pages/CategoryPage';
import { HomePage } from './pages/HomePage';
import { DisplayPage } from './pages/DisplayPage';
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route exact path='/category' element={<Category></Category>}></Route>
        {/* <Route exact path='/' element={<h3>This is HOME</h3>}></Route> */}
        {/* <Route exact path='/register' element={<Register></Register>}></Route> */}
        <Route exact path='/' element={<Register></Register>}></Route>
        <Route exact path='/home' element={<HomePage></HomePage>}></Route>
        <Route exact path='/display' element={<DisplayPage></DisplayPage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
