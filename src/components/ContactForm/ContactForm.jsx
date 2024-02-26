import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PhoneNumber from 'components/PhoneNumber/PhoneNumber';
import {
  LeftStyledList,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

const ContactForm = ({ addingContact, contacts }) => {
  const [data, setData] = useState({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (data.name.trim() === '' || data.number.trim() === '') {
      return;
    }
    if (contacts.find(person => person.name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    if (contacts.find(person => person.number === data.number)) {
      alert(`${data.name}'s number "${data.number}" is already in contacts!`);
      return;
    }

    if (!validatePhoneNumber(data.number)) {
      alert(`Phone is invalid`);
      return;
    }

    addingContact({
      id: nanoid(6),
      name: data.name,
      number: data.number,
    });
    reset();
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validatePhoneNumber = () => {
    const PhoneNumberPattern = new RegExp(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    );
    return PhoneNumberPattern.test(data.number);
  };

  const reset = () => {
    setData({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <StyledForm
        onSubmit={e => {
          handleSubmit(e);
          validatePhoneNumber(e);
        }}
      >
        <LeftStyledList>
          <StyledLabel>
            Name
            <StyledInput
              type="text"
              name="name"
              value={data.name}
              onChange={handleInput}
              required
            />
          </StyledLabel>
          <PhoneNumber number={data.number} handleInput={handleInput} />
        </LeftStyledList>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;
