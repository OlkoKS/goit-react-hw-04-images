import { Component } from 'react';
import {
  HeaderElement,
  FormElement,
  SearchButton,
  InputElement,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value.trim() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.state.value) {
      return alert('Please enter your request!');
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <HeaderElement className="searchbar">
        <FormElement className="form" onSubmit={this.handleSubmit}>
          <SearchButton type="submit" className="button">
            <span className="button-label">&#128269;</span>
          </SearchButton>

          <InputElement
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </FormElement>
      </HeaderElement>
    );
  }
}
