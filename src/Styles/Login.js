import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 80%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 85%;
  padding: 12px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ToggleLink = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #0056b3;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;
