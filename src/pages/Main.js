import React, { useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddIcon from '@material-ui/icons/Add';
import Search from '../components/Search';
import styled from 'styled-components';

import Notes from '../components/Notes';
import { ReactComponent as EmptyNotesIcon } from '../assets/add-note-illustration.svg';
import { Modal } from '@material-ui/core';
import NewNote from '../components/NewNote';

const initialNotes = [
  {
    type: 'home',
    isComplete: false,
    title: 'Home Note',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…',
    date: new Date().toString(),
  },
  {
    type: 'home',
    isComplete: false,
    title: 'Home Note 2',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…',
    date: new Date().toString(),
  },
  {
    type: 'work',
    isComplete: false,
    title: 'Work Note',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…',
    date: new Date().toString(),
  },
  {
    type: 'work',
    isComplete: false,
    title: 'Work Note 2',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…',
    date: new Date().toString(),
  },
  {
    type: 'personal',
    isComplete: false,
    title: 'Personal Note',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…',
    date: new Date().toString(),
  },
  {
    type: 'personal',
    isComplete: false,
    title: 'Personal Note 2',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…',
    date: new Date().toString(),
  },
];

const initialState = {
  notes: initialNotes,
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
  margin: 0 0.5rem;
`;

const ProgressContainer = styled.div`
  width: 60%;
  margin: 1rem auto;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 1rem 1rem;
`;

const useStyles = makeStyles({
  home: {
    backgroundColor: '#FF9100',
    color: 'white',
  },
  work: {
    backgroundColor: '#5C6BC0',
    color: 'white',
  },
  personal: {
    backgroundColor: '#66BB6A',
    color: 'white',
  },
});

/*
  structure of a note: 
      description
      title 
      category 
      date
      completed
*/

// need to think about how you should update the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_NOTE':
      return {
        notes: state.notes.slice().concat(action.payload),
      };
    case 'EDIT_NODE':
      // update only one note...
      return {
        notes: state.notes.map((note) =>
          note.title === action.payload.title ? action.payload.note : note
        ),
      };
    case 'DELETE_NOTE':
      return {
        notes: state.notes.filter(
          (note) => note.title !== action.payload.title
        ),
      };
    default:
      return state;
  }
};

// import add note component.

const Main = () => {
  const classes = useStyles();
  const [showNote, setShowNote] = useState(false);
  // need to start setting up dispatch here....
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filterState, setFilterState] = useState('all');
  const { notes } = state;
  const [visibleNotes, setVisibleNotes] = useState(notes);
  // maybe it should all just be "notes"...
  // then have functions that provide filter/search
  const completedNotes = notes.reduce(
    (total, currentNote) => (currentNote.isComplete ? total + 1 : total),
    0
  );
  const totalNotes = notes.length;
  // user of note component will handle its appearance. but note itself will handle form state.
  const handleAddNote = () => setShowNote(true);
  const handleCloseNote = () => setShowNote(false);

  // updates notes rendered when searching
  const handleSearch = (value) => {
    console.log({ notes });
    // show all notes where the search text is included in the title
    const searchNotes = notes
      .slice()
      .filter((note) => note.title.toLowerCase().includes(value));
    setVisibleNotes(searchNotes);
  };
  // updates notes rendered when filtering
  const handleFilter = (filterType) => {
    if (filterType === 'all') {
      setVisibleNotes(notes);
    } else {
      const filteredNotes = notes
        .slice()
        .filter((note) => note.type === filterType);
      setVisibleNotes(filteredNotes);
    }
    setFilterState(filterType);
  };
  return (
    <section>
      <div>
        <SearchContainer>
          <Search onChange={handleSearch} />
        </SearchContainer>
        <ActionsContainer>
          <FiltersContainer>
            <Button
              variant={filterState === 'all' ? 'contained' : 'text'}
              color={filterState === 'all' ? 'primary' : 'default'}
              onClick={() => handleFilter('all')}
            >
              All
            </Button>
            <div>
              <Button
                variant={filterState === 'home' ? 'contained' : 'text'}
                className={filterState === 'home' && classes[filterState]}
                onClick={() => handleFilter('home')}
              >
                Home
              </Button>
            </div>
            <div>
              <Button
                variant={filterState === 'work' ? 'contained' : 'text'}
                className={filterState === 'work' && classes[filterState]}
                onClick={() => handleFilter('work')}
              >
                Work
              </Button>
            </div>
            <div>
              <Button
                variant={filterState === 'personal' ? 'contained' : 'text'}
                className={filterState === 'personal' && classes[filterState]}
                onClick={() => handleFilter('personal')}
              >
                Personal
              </Button>
            </div>
          </FiltersContainer>
          <Button variant='contained' color='primary' onClick={handleAddNote}>
            <AddIcon />
            &nbsp;ADD NOTE
          </Button>
        </ActionsContainer>
        <ProgressContainer>
          <div
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              padding: '0.5rem 0',
            }}
          >
            You have {completedNotes}/{totalNotes} notes completed
          </div>
          <LinearProgress variant='determinate' value={0} />
        </ProgressContainer>
      </div>
      {/* <LinearProgress variant='determinate' value={0} />
      <h3>
        You have {`${completedNotes || 0} / ${totalNotes || 1}`} notes completed
      </h3>
      <Notes /> */}
      {/* {if there are no notes, show the 'you donnt have any notes'} */}
      {/* {if there}  */}
      {/* <Notes notes={} /> */}
      {totalNotes ? (
        <Notes notes={visibleNotes} />
      ) : (
        <>
          <EmptyNotesMessage>You don't have any notes</EmptyNotesMessage>
          <EmptyNotesIcon />
        </>
      )}
      <Modal open={showNote} aria-labelledby='add note modal'>
        <NewNote onClose={handleCloseNote} />
      </Modal>
    </section>
  );
};

export default Main;
