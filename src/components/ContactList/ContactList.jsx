import { nanoid } from 'nanoid';
import React from 'react';
import {
  ListWrapper,
  SpanWrapper,
  StyledDelButton,
  StyledLiWrapper,
  StyledName,
  StyledNumber,
} from './ContactList.styled';

export default function ContactList({ contacts, onDelete }) {
  const contactList = contacts();
  return (
    <ListWrapper>
      {contactList.map(({ id = nanoid(6), name, number }) => (
        <StyledLiWrapper key={id}>
          <SpanWrapper>
            <StyledName>{name}</StyledName>
            <StyledNumber>{number}</StyledNumber>
          </SpanWrapper>
          <StyledDelButton onClick={() => onDelete(id)}>Delete</StyledDelButton>
        </StyledLiWrapper>
      ))}
    </ListWrapper>
  );
}
