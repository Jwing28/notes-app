// build out notes component
// it should be able to render all the notes
// it should receive all the data for all the notes in such a way to simply map over all of it.
// should it have any state?

import React, { useState } from 'react';
import styled from 'styled-components';

import Note from './Note';

const NotesContainer = styled.div`
  display: flex;
`;

// the notes order will be controlled above by its parent.
// it can be filtered / searched by title or show all notes
const Notes = ({ notes }) => {
  <NotesContainer>
    {notes.map((note) => (
      <Note noteType={note.type} noteContents={note} index={note.title} />
    ))}
  </NotesContainer>;
};

export default Notes;
