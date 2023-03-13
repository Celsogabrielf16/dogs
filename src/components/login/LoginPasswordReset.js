import React from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Error from "../Helper/Error";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const { loading, error, request } = useFetch();
  const password = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    console.log('sdasdfg');
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const {response} = await request(url, options);
      if(response.ok) navigate('/login')
    }
  }
  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando ...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default LoginPasswordReset;
