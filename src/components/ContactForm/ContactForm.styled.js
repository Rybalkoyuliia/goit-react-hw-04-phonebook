import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
`;
export const LeftStyledList = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 10px;
  font-style: italic;
  color: rgb(255, 255, 255);
`;

export const StyledInput = styled.input`
  height: 20px;
  border-radius: 10px;
  border: none;
  padding: 2px 8px;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  background-color: rgb(253, 135, 6);
  border: none;
  height: 25px;
  color: rgb(255, 255, 255);
  border-radius: 20px;
  font-size: 12px;
  font-style: italic;

  &:hover {
    cursor: pointer;
  }
`;
