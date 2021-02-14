import React, { useReducer, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MenuItem from '@material-ui/core/MenuItem';

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

const NewNote = ({ open, handleClose, handleAdd, handleCategory }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  return (
    <Modal open={open}>
      <FormControl>
        <CardHeader>Add note</CardHeader>
        <div>
          <TextField
            placeholder='Add title...'
            value={title}
            onChange={handleTitleChange}
          />
          <Select placeholder='Select Category' onChange={handleCategory}>
            {categories.map((category, idx) => (
              <MenuItem value={category.value} id={idx}>
                {category.text}
              </MenuItem>
            ))}
          </Select>
          <TextareaAutosize
            placeholder='Add description...'
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>
        <div>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleAdd}>ADD</Button>
        </div>
      </FormControl>
    </Modal>
  );
};

export default NewNote;
