import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationSelection from './LocationSelection';
import SchedPicker from './SchedPicker';
import DaysAndPersonField from './DaysAndPersonField';

const styles = theme => ({
  card: {
    marginTop: 10,
    minWidth: 275,
    maxWidth: window.innerWidth - theme.spacing.unit * 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    marginTop: theme.spacing.unit,
    // margin: theme.spacing.unit,
  },
});

class Scheduler extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Add Your Schedule
          </Typography>
          <LocationSelection />
          <SchedPicker />
          <DaysAndPersonField />
          <Button variant="contained" size="large" fullWidth={true} color="primary" className={classes.button}>
            Submit
          </Button>
        </CardContent>
      </Card>
    );
  }
}

Scheduler.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Scheduler);