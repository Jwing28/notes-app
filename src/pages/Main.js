import React, { useReducer, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddIcon from '@material-ui/icons/Add';
import Search from '../components/Search';
import styled from 'styled-components';

import Notes from '../components/Notes';
import { ReactComponent as EmptyNotes } from '../assets/add-note-illustration.svg';
import { Modal } from '@material-ui/core';
import NewNote from '../components/NewNote';

const initialState = {
  home: [],
  work: [],
  personal: [],
};

// styled-components
const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EmptyNotesMessage = styled.h1`
  color: gray;
  padding: 1rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 1rem 1rem;
`;

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
    case 'SAVE_NOTE':
      return {};
    case 'EDIT_NODE':
      return {};
    case 'DELETE_NOTE':
      return {};
    default:
      return state;
  }
};

// import add note component.

const Main = () => {
  const [showNote, setShowNote] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { completedNotes, totalNotes } = state;

  // user of note component will handle its appearance. but note itself will handle form state.
  const handleAddNote = () => setShowNote(true);
  const handleCloseNote = () => setShowNote(false);

  const handleSearch = () => {};

  return (
    <section>
      <div>
        <SearchContainer>
          <Search onChange={handleSearch} />
        </SearchContainer>
        <ActionsContainer>
          <FiltersContainer>
            <Button variant='contained' color='primary'>
              All
            </Button>
            <div>
              <Button>Home</Button>
            </div>
            <div>
              <Button>Work</Button>
            </div>
            <div>
              <Button>Personal</Button>
            </div>
          </FiltersContainer>
          <Button variant='contained' color='primary' onClick={handleAddNote}>
            <AddIcon />
            &nbsp;ADD NOTE
          </Button>
        </ActionsContainer>
      </div>
      {/* <LinearProgress variant='determinate' value={0} />
      <h3>
        You have {`${completedNotes || 0} / ${totalNotes || 1}`} notes completed
      </h3>
      <Notes /> */}
      {/* {if there are no notes, show the 'you donnt have any notes'} */}
      {/* {if there}  */}
      <EmptyNotesMessage>You don't have any notes</EmptyNotesMessage>
      <EmptyNotes />
      <Modal open={showNote} aria-labelledby='add note modal'>
        <NewNote onClose={handleCloseNote} />
      </Modal>
    </section>
  );
};

export default Main;
