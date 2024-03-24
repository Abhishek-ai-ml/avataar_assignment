import './App.css';
import Herosection from './components/herosection/Herosection';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar/>

      <Herosection/>
    </div>
  );
}

export default App;
