import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Home />} />
    <Route path="newRoom/*"  element={<NewRoom />} />
    </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;

