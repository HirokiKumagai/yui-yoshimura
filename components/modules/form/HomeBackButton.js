import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function HomeButtons({url, text}) {
  const classes = useStyles();

  return (
    <Button
      color="primary"
      className={classes.button}
      variant="outlined"
      href={url}
    >
      {text}
    </Button>
  );
}
