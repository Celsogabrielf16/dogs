import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            <button onClick={userLogout}>Sair</button>
            {data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
