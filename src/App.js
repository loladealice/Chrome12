
import './App.css';
import { AddPeople } from './Components/Icons';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="App">
     <Navbar/>
     <div className='one'>
      <div><AddPeople/></div>
      <div className='add'>Add people</div>
     </div>
      <Main/>
    </div>
  );
}

export default App;
