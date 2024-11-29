import React, { useState } from 'react';
import CadastroForm from '../Cadastro/Cadastro.jsx';
import LoginForm from '../Login/Login.jsx';
import { Container, LeftSide, RightSide } from '../Styles/Layout.js';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <LeftSide>
        {!isLogin && <CadastroForm toggleForm={toggleForm} />}
      </LeftSide>
      <RightSide>
        {isLogin && <LoginForm toggleForm={toggleForm} />}
      </RightSide>
    </Container>
  );
};

export default App;
