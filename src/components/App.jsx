import React from 'react';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import {
  StyledMainTitle,
  StyledMainWrapper,
  StyledTitle,
  StyledWrapper,
} from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '(902)459-1256' },
      { id: 'id-2', name: 'Hermione Kline', number: '(316)443-8912' },
      { id: 'id-3', name: 'Eden Clements', number: '(904)645-1779' },
      { id: 'id-4', name: 'Annie Copeland', number: '(768)227-9126' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete = id => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(contact => contact.id !== id) };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <StyledMainWrapper>
        <StyledMainTitle>My Phonebook</StyledMainTitle>
        <StyledWrapper>
          <ContactForm addingContact={this.addContact} contacts={contacts} />
        </StyledWrapper>

        <StyledWrapper>
          <StyledTitle>Contacts</StyledTitle>
          <Filter filter={filter} handleFilter={this.handleFilter} />
        </StyledWrapper>

        <ContactList
          contacts={this.filterContacts}
          onDelete={this.handleDelete}
        />
      </StyledMainWrapper>
    );
  }
}
