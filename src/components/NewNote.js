import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { styled as styledMui } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { FormControl, InputLabel } from '@material-ui/core';

// Mui customized Select component
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(0),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#f4f4f4',
    border: 'none',
    fontSize: 16,
    padding: '10px',
    width: '100%',
    margin: '10px',
    height: '1rem',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

// styled-components
const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
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
  min-width: 60%;
  min-height: 300px;
  border-radius: 5px;
`;

const StyledFormControl = styledMui(FormControl)({
  width: '30%',
  height: '100%',
});

const StyledInputLabel = styledMui(FormControl)({
  paddingLeft: '1rem',
});

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
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.65rem 0 0.65rem 0.5rem;
`;

const StyledTextarea = styled.textarea`
  width: ${(p) => (p.width ? p.width : 'inherit')};
  line-height: ${(p) => (p.height ? p.height : 'inherit')};
  background-color: #f4f4f4;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0 0.5rem 0.5rem;
  resize: none;

  ::placeholder,
  ::-webkit-textarea-placeholder {
    top: 0;
    font-size: 1rem;
    transform: translateY(-50px);
  }
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
    text: 'Personal',
  },
];

const NewNote = ({ open, handleAdd, onClose }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSubmit = (e) => {
    // don't refresh page
    e.preventDefault();
    handleAdd({
      category,
      description,
      title,
      isComplete: false,
      date: new Date().toString(),
    });
    onClose();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeader>Add note</StyledHeader>
      <StyledContainer>
        <StyledInput
          width='60%'
          height={1}
          placeholder='Add title...'
          value={title}
          onChange={handleTitleChange}
        />
        <StyledFormControl variant='filled'>
          <InputLabel style={{ padding: '0 1rem' }}>Select Category</InputLabel>
          <Select
            value={category}
            onChange={handleCategory}
            input={<BootstrapInput />}
          >
            <MenuItem value='' selected>
              <em>None</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem value={category.value}>{category.text}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
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
        <Button color='primary' type='submit'>
          ADD
        </Button>
      </StyledActions>
    </StyledForm>
  );
};

export default NewNote;
