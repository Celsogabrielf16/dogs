import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import './LoginForm.css'
import '../Form/Button.css'

const LoginForm = () => {
  const username = useForm("");
  const password = useForm("");

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft LoginFormComponent">
      <h1 className="title">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (<Button disabled> Carregando... </Button>) : (<Button> Entrar </Button>)}
        <Error error={error}/>
      </form>
      <Link className="perdeu" to="/login/perdeu">Perdeu a Senha?</Link>
      <div className="cadastro">
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="link" to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
