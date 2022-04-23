import { auth } from 'firebase-admin';
import { createContext, useState, useEffect  } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { firebase } from './services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext ({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>();

  useEffect (() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user =>{
      if (user)  {
        const { displayName, photoURL, uid } =  user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');


        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [] )

  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await firebase.auth().signInWithPopup( provider );
    //autenticacao com o email//
      if (result.user) {
        const { displayName, photoURL, uid } = result.user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');


        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
  }

  return (
    <BrowserRouter>
     <AuthContext.Provider value={{ user, signInWithGoogle }}>
    <Routes>
    <Route  path="/" element={<Home />} />
    <Route path="newRoom/*"  element={<NewRoom />} />
    </Routes>
    </AuthContext.Provider>
      
    </BrowserRouter>
    
  );
}

export default App;

