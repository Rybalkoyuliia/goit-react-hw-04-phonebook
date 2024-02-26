import React, { useEffect, useState } from 'react';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import {
  StyledMainTitle,
  StyledMainWrapper,
  StyledTitle,
  StyledWrapper,
} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '(902)459-1256' },
    { id: 'id-2', name: 'Hermione Kline', number: '(316)443-8912' },
    { id: 'id-3', name: 'Eden Clements', number: '(904)645-1779' },
    { id: 'id-4', name: 'Annie Copeland', number: '(768)227-9126' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    if (prev => prev.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = contact => {
    setContacts(prev => [contact, ...prev]);
  };

  const handleFilter = e => {
    setFilter(e);
  };

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <StyledMainWrapper>
      <StyledMainTitle>My Phonebook</StyledMainTitle>
      <StyledWrapper>
        <ContactForm addingContact={addContact} contacts={contacts} />
      </StyledWrapper>

      <StyledWrapper>
        <StyledTitle>Contacts</StyledTitle>
        <Filter filter={filter} handleFilter={handleFilter} />
      </StyledWrapper>

      <ContactList
        filteredContacts={filteredContacts}
        onDelete={handleDelete}
      />
    </StyledMainWrapper>
  );
};

export default App;
