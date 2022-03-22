import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Arithmetic from './dashboard/arithmetic';
import Addition from './dashboard/addition';
import Substraction from './dashboard/substraction';
import Division from './dashboard/division';
import Multiplication from './dashboard/multiplication';
import Logical from './dashboard/logical';
import Greater from './dashboard/greater'
import OddEven from './dashboard/oddeven';
import Swapping from './dashboard/swapping';
import Faran from './dashboard/fahrenheit';
import Allinone from './dashboard/allinone';
import Array from './dashboard/array';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/arthmetic' element={<Arithmetic/>}/>
          <Route path='/addition' element={<Addition/>}/>
          <Route path='/substracton' element = {<Substraction/>}/>
          <Route path='/division' element = {<Division/>}/>
          <Route path= '/multiplication' element = {<Multiplication/>}/>
          <Route path= '/logical' element = {<Logical/>}/>
          <Route path= '/greater' element = {<Greater/>}/>
          <Route path= '/oddeven' element = {<OddEven/>}/>
          <Route path= '/swapping' element ={<Swapping/>}/>
          <Route path='/fahrenheit' element ={<Faran/>}/>
          <Route path='/allinone' element ={<Allinone/>}/>
          <Route path='/array' element = {<Array/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
