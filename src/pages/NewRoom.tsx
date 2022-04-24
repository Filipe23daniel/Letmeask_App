import { FormEvent, useState } from 'react';
//import { useContext } from 'react';
//import { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { AuthContext } from '../contexts/AuthContext';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';


import { Button } from '../Components/Button';
//import { useAuth } from '../hooks/useAuth';

//import { TestContext } from '../App';

import '../styles/auth.scss';

export function NewRoom() {
  //const { user } = useAuth();
 // const { value, setValue } = useContext(TestContext);

 const [ newRoom, setNewRoom] = useState(' ');

 async function handleCreateRoom(event: FormEvent) {
       event.preventDefault();

       if (newRoom.trim() ===  ' ') {
         return;
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
          <h2>Criar uma nova sala </h2>
          <form onSubmit={handleCreateRoom}>
            <input 
            type="text" 
            placeholder="Nome da sala"
            onChange={event => setNewRoom(event.target.value)}
            value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clica aqui</Link>

          </p>
        </div>
      </main>
    </div>
  )
} 