import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class LocationSelection extends React.Component {
  state = {
    location: 'Montalban',
    name: 'location',
    labelWidth: 0,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl} style={{width: "100%"}}>
          <InputLabel htmlFor="location-native-simple">Location</InputLabel>
          <Select
            native
            value={this.state.location}
            onChange={this.handleChange('location')}
            inputProps={{
              name: 'location',
              id: 'location-native-simple',
            }}
          >
            <option value="" />
            <option value={10}>Montalban</option>
            <option value={20}>Atimonan</option>
            <option value={30}>Bukidnon</option>
          </Select>
        </FormControl>
      </div>
    )
  }
}

LocationSelection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationSelection);