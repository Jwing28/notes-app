import React, { useReducer, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';

// styled-components
const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledContainer = styled.div`
  width: 100%;

  & > * {
    margin-bottom: 1rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  background-color: white;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 0 1.5rem 1rem;
  min-width: 40%;
  min-height: 300px;
  border-radius: 5px;
`;

const StyledHeader = styled.div`
  color: gray;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 1px solid lightgray;
  width: 90%;
`;

const StyledInput = styled.input`
  width: ${(p) => (p.width ? p.width : 'inherit')};
  line-height: ${(p) => (p.height ? p.height : 'inherit')};
  background-color: #f4f4f4;
`;

const StyledTextarea = styled.textarea`
  width: ${(p) => (p.width ? p.width : 'inherit')};
  line-height: ${(p) => (p.height ? p.height : 'inherit')};
  background-color: #f4f4f4;
`;

const StyledSelect = styled.select`
  line-height: ${(p) => (p.height ? p.height : 'inherit')};
`;

const categories = [
  {
    value: 'Home',
    text: 'Home',
  },
  {
    value: 'Work',
    text: 'Work',
  },
  {
    value: 'Personal',
    text: 'Personal`',
  },
];

const NewNote = ({ open, handleAdd, handleCategory, onClose }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  return (
    <StyledForm>
      <StyledHeader>Add note</StyledHeader>
      <StyledContainer>
        <StyledInput
          width='60%'
          placeholder='Add title...'
          value={title}
          onChange={handleTitleChange}
        />
        <StyledSelect
          value={categories[0].value}
          height={6}
          width={10}
          variant='outlined'
          placeholder='Select Category'
          onChange={handleCategory}
        >
          {categories.map((category, idx) => (
            <MenuItem value={category.value} id={idx}>
              {category.text}
            </MenuItem>
          ))}
        </StyledSelect>
      </StyledContainer>
      <StyledTextarea
        height={10}
        width='60%'
        placeholder='Add description...'
        onChange={handleDescriptionChange}
        value={description}
      />
      <StyledActions>
        <Button color='primary' onClick={onClose}>
          CANCEL
        </Button>
        <Button color='primary' onClick={handleAdd}>
          ADD
        </Button>
      </StyledActions>
    </StyledForm>
  );
};

export default NewNote;
