import React, { useState } from 'react';
import { FormWrapper, Input, Button, ToggleLink } from '../Styles/Login.js';

const LoginForm = ({ toggleForm }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário de login enviado com sucesso!');
  };

  return (
  
   
        <FormWrapper>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={loginData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={loginData.senha}
          onChange={handleChange}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <ToggleLink onClick={toggleForm}>Não tenho uma conta</ToggleLink>
    </FormWrapper>

  );
};

export default LoginForm;
