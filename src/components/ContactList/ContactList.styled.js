import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
`;

export const StyledLiWrapper = styled.li`
  background-color: rgb(52, 52, 52);
  padding: 5px 15px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledName = styled.span`
  color: rgb(253, 135, 6);
  font-weight: bold;
  font-size: 18px;
`;

export const StyledNumber = styled.span`
  color: rgb(255, 255, 255);
  font-size: 14px;
`;

export const StyledDelButton = styled.button`
  border-radius: 20px;
  height: 20px;
  border: 2px solid rgb(253, 135, 6);
  color: rgb(253, 135, 6);
  &:hover {
    background-color: rgb(253, 135, 6);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;
