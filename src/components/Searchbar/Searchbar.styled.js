import { styled } from 'styled-components';

const HeaderElement = styled.header`
  width: 100%;
  padding: 24px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: rgb(24, 173, 143);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;

const FormElement = styled.form`
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  margin-right: -5px;
  width: 60px;
  height: 60px;
  padding: 0 10px;
  font-size: 32px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

const InputElement = styled.input`
  width: 400px;
  height: 60px;
  padding: 0 10px;
  font-size: 24px;
  border: none;
  outline: none;
  border-radius: 4px;
  &::placeholder {
    font-size: 20px;
  }
`;

export { HeaderElement, FormElement, SearchButton, InputElement };
