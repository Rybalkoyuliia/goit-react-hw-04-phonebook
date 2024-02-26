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

export default function ContactList({ filteredContacts, onDelete }) {
  return (
    <ListWrapper>
      {filteredContacts.map(({ id = nanoid(6), name, number }) => (
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
