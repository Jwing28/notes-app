import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    backgroundColor: 'white',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const CustomSearch = ({ onChange }) => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleChange = (e) => {
    // displays the input when typed
    setValue(e.target.value);
    // passed to parent to filter notes
    onChange(e.target.value);
  };

  return (
    <Box component='form' boxShadow={2} className={classes.root}>
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder='Search notes...'
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleChange}
        value={value}
      />
    </Box>
  );
};

export default CustomSearch;
