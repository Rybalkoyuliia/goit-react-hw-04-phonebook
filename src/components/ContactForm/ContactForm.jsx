import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneNumber from 'components/PhoneNumber/PhoneNumber';
import {
  LeftStyledList,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addingContact, contacts } = this.props;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    if (contacts.find(person => person.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    if (contacts.find(person => person.number === number)) {
      alert(`${name}'s number "${number}" is already in contacts!`);
      return;
    }

    if (!this.validatePhoneNumber()) {
      console.log(this.state.number);
      console.log(this.validatePhoneNumber());
      alert(`Phone is invalid`);
      return;
    }

    addingContact({
      id: nanoid(6),
      name,
      number,
    });
    this.reset();
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validatePhoneNumber = () => {
    const PhoneNumberPattern = new RegExp(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    );
    return PhoneNumberPattern.test(this.state.number);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <StyledForm
          onSubmit={e => {
            this.handleSubmit(e);
            this.validatePhoneNumber(e);
          }}
        >
          <LeftStyledList>
            <StyledLabel>
              Name
              <StyledInput
                type="text"
                name="name"
                value={name}
                onChange={this.handleInput}
                required
              />
            </StyledLabel>
            <PhoneNumber number={number} handleInput={this.handleInput} />
          </LeftStyledList>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </>
    );
  }
}
