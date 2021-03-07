import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { styled as styledMui } from '@material-ui/core/styles';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Button } from '@material-ui/core';

// Styled-components
const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompletedContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ChangesContainer = styled.div`
  display: flex;
`;

const DeleteNoteActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// Styled Mui components
const StyledCard = styledMui(Card)({
  backgroundColor: '#66BB6A',
});

const StyledCardContent = styledMui(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  flexDirection: 'column',
});

const WhiteCheckbox = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: 'lightgray',
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    color: 'white',
    minHeight: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  deleteNote: {
    padding: '1rem',
    display: 'flex',
    minHeight: '1.5rem',
    minWidth: '15vw',
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginBottom: '0',
  },
  completed: {
    backgroundColor: '#282E2999',
    textDecoration: 'line-through',
  },
  home: {
    backgroundColor: '#FF9100',
  },
  work: {
    backgroundColor: '#5C6BC0',
  },
  personal: {
    backgroundColor: '#66BB6A',
  },
  pos: {
    marginBottom: 12,
  },
});

const currentDate = new Date();

const Note = ({ noteContents = {}, noteType = '' }) => {
  const { date, description, isComplete, title } = noteContents;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checked, setChecked] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleChecked = () => setChecked(!checked);
  const handleCloseDeleteNote = () => {
    setAnchorEl(null);
    setShouldDelete(false);
  };
  const handleDeleteNote = (e) => {
    setAnchorEl(e.currentTarget);
    setShouldDelete(!shouldDelete);
  };
  const handleEditNote = () => {
    // edit should open the same content that add a new note does,
    // only this time we're going to fill it with all the data.
  };
  /*
  checkbox title    action keys
  description
  date
*/
  return (
    <StyledCard
      className={`${classes.root} ${
        checked ? classes['completed'] : classes[noteType]
      }`}
    >
      <StyledCardContent>
        <ActionsContainer>
          <CompletedContainer>
            <WhiteCheckbox
              checked={checked}
              onChange={handleChecked}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              {title}
            </Typography>
          </CompletedContainer>
          <ChangesContainer>
            <CardActions>
              <IconButton aria-label='edit note' onClick={handleEditNote}>
                <EditIcon style={{ color: 'white' }} />
              </IconButton>
              <IconButton onClick={handleDeleteNote}>
                <DeleteIcon style={{ color: 'white' }} />
              </IconButton>
              <Popover
                open={shouldDelete}
                anchorEl={anchorEl}
                onClose={handleCloseDeleteNote}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <Card className={classes.deleteNote}>
                  <Typography variant='h6' gutterBottom>
                    Delete Note?
                  </Typography>
                  <DeleteNoteActions>
                    <Button onClick={handleCloseDeleteNote}>CANCEL</Button>
                    <Button>DELETE</Button>
                  </DeleteNoteActions>
                </Card>
              </Popover>
            </CardActions>
          </ChangesContainer>
        </ActionsContainer>
        <div>{description}</div>
      </StyledCardContent>
      <Typography className={classes.root} color='textSecondary' gutterBottom>
        {date}
      </Typography>
    </StyledCard>
  );
};

export default Note;
