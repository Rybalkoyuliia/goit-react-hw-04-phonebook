import {
  StyledInput,
  StyledLabel,
} from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filter, handleFilter }) => {
  const onFilter = e => {
    handleFilter(e.target.value);
  };

  return (
    <div style={{ paddingRight: '15px' }}>
      <StyledLabel>
        Filter
        <StyledInput
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
          required
        />
      </StyledLabel>
    </div>
  );
};
