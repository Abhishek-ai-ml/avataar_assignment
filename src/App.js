import { useState } from 'react';
import './App.css';
import Herosection from './components/herosection/Herosection';
import Navbar from './components/navbar/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  const stateHandle = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Delay of 2000 milliseconds (2 seconds)
  };
  stateHandle();
  return (
   <>
    {
      loading ? <div className='loader'><div className='custom-loader'></div></div> : 

      <div className='container'>
        <Navbar/>

        <Herosection/>
    </div>
    }
   </>
  );
}

export default App;
