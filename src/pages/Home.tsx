import { FormEvent, useState } from 'react';
//import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//import { GoogleAuthProvider } from 'firebase/auth';

//import { firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { database } from '../services/firebase';

import { Button } from '../Components/Button';

//import { TestContext } from '../App';

import '../styles/auth.scss';
//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';


export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState(' ');
  //const { value, setValue} = useContext(TestContext);

  async function handleCreateRoom() {
    if  (!user) {
      await signInWithGoogle()
    }

    navigate('newRoom/*');

    async function handleCreateRoom (event: FormEvent) {
      event.preventDefault();

      if (roomCode.trim() === ' ') {
        return;
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get();

      if (!roomRef.exists()) {
        alert('room does not exists.');
        return;
      }
      
    }
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustracao simboliza perguntas" />
        <strong>Crie salas de Q$A ao vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleCreateRoom}>
            <input 
            type="text" 
            placeholder="Digite o codigo da sala"
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}
            />
            <Button type="submit">
              Entra na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
} 