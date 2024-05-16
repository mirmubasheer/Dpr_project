import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Selector from './components/selector';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/selector" element={<Selector />} />
        </Routes>
      </BrowserRouter>
      {/* {error && <div>Error: {error}</div>} */}
    </div>
  );
}

export default App;
