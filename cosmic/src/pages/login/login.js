import logo from '../../images/logo.png';
import microsoft from '../../images/microsoft.png';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
  return (
    <div className="container">

      <img src={logo} className="imagem" alt="logo" />

      <button className='botao'>Empresa</button>

      <Link to="/candidato"><button className='botao'>Candidato</button></Link>

      <button className='bt'>Conta Microsoft</button>

      <img src={microsoft} className="imagem2" />

    </div>
  );
}

export default Login;
