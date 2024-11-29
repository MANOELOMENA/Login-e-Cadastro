import React, { useState } from 'react';
import { FormWrapper, Input, Button, ToggleLink } from '../Styles/Cadastro.js';

const CadastroForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    Confirmsenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário de cadastro enviado com sucesso!');
  };

  return (
    
      <FormWrapper>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="Confirmsenha"
            placeholder="Confirma Senha"
            value={formData.Confirmsenha}
            onChange={handleChange}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <ToggleLink onClick={toggleForm}>Já tenho uma conta</ToggleLink>
      </FormWrapper>
 
  );
};

export default CadastroForm;
