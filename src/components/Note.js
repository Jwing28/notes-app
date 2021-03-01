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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginBottom: '0',
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
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(noteType);
  const handleChange = () => {};
  /*
  checkbox title    action keys
  description
  date
*/
  return (
    <StyledCard className={`${classes.root} ${classes[noteType]}`}>
      <StyledCardContent>
        <ActionsContainer>
          <CompletedContainer>
            <WhiteCheckbox
              checked={checked}
              onChange={handleChange}
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
              <EditIcon style={{ color: 'white' }} />
              <DeleteIcon style={{ color: 'white' }} />
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
