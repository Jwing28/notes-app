import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const initialState = {
  home: [],
  work: [],
  personal: [],
};

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
      </div>
      <Button>+ ADD NOTE</Button>
    </section>
  );
};

export default Main;
