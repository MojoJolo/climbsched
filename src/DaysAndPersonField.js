import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class DaysAndPersonField extends React.Component {
  state = {
    days: 1,
    person: 1,
  };

  handleChange = value => event => {
    this.setState({ [value]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              id="standard-number"
              label="Number of days"
              value={this.state.days}
              onChange={this.handleChange('days')}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-number"
              label="Number of person"
              value={this.state.person}
              onChange={this.handleChange('person')}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

DaysAndPersonField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DaysAndPersonField);