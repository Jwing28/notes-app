import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';

import Notes from '../components/Notes';

const initialState = {
  home: [],
  work: [],
  personal: [],
};

/*
    structure of a note: 
        description
        title 
        category 
        date
        completed
*/

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <TextField />
      <div>
        <Button>All</Button>
        <Button>Home</Button>
        <Button>Work</Button>
        <Button>Personal</Button>
        <Button>+ ADD NOTE</Button>
      </div>
      <LinearProgress variant='determinate' value={0} />
      <h3>You have {`${completedNotes} / ${totalNotes}`} notes completed</h3>
      <Notes />
      {/* {if there are no notes, show the 'you donnt have any notes'} */}
      {/* {if there}  */}
    </section>
  );
};

export default Main;
