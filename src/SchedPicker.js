import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
});

class SchedPicker extends React.Component {
  render() {
    const { classes } = this.props;

    return(
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2019-05-14"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    )
  }
}

SchedPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchedPicker);