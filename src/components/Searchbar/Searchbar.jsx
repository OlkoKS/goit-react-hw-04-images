import { useState } from 'react';
import {
  HeaderElement,
  FormElement,
  SearchButton,
  InputElement,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!value) {
      return alert('Please enter your request!');
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <HeaderElement className="searchbar">
      <FormElement className="form" onSubmit={handleSubmit}>
        <SearchButton type="submit" className="button">
          <span className="button-label">&#128269;</span>
        </SearchButton>

        <InputElement
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={value}
        />
      </FormElement>
    </HeaderElement>
  );
};
