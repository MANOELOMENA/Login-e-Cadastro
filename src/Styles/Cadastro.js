import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  width: 880px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  
`;

export const Input = styled.input`
  width: 60%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 63%;
  padding: 12px;
  background-color: #007bff;
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
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;
