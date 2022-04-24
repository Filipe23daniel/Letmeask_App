//import { auth } from 'firebase-admin';
//import { createContext, useState, useEffect  } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
//import { firebase } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext';



function App() {


  return (
    <BrowserRouter>
    <AuthContextProvider>
    <Routes>
    <Route  path="/" element={<Home />} />
    <Route path="newRoom/*"  element={<NewRoom />} />
    <Route path="/rooms/:id"  element={<Room />} />
    </Routes>
    </AuthContextProvider>
      
    </BrowserRouter>
    
  );
}

export default App;

