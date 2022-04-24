//import { useContext } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';


import { Button } from '../Components/Button';

//import { TestContext } from '../App';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useContext(AuthContext);
 // const { value, setValue } = useContext(TestContext);
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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova </h2>
          <form>
            <input 
            type="text" 
            placeholder="Nome da sala"
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