import React, { useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const currentDate = new Date();

const Note = ({ date = currentDate, description, title }) => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleChange = () => {};

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <div>
            <Checkbox
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
          </div>
          <div>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </div>
        </div>
        <div>{description}</div>
      </CardContent>
      <Typography className={classes.title} color='textSecondary' gutterBottom>
        {date}
      </Typography>
    </Card>
  );
};

export default Note;
