import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import './UserHeader.css'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname);
    switch (location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break;
        case '/conta/postar':
          setTitle('Poste Sua Foto')
        break;
      default:
        setTitle('Minha Conta')
        break;
    }
  }, [location])

  return (
    <header className='UserHeaderComponent'>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader