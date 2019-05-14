import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Scheduler from './Scheduler';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  collapsible: {
    width: "100%",
  },
});

class AddSched extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const checked = this.props.addSchedState;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Collapse in={checked} className={classes.collapsible}>
            <Scheduler />
          </Collapse>
        </div>
      </div>
    );
  }
}

AddSched.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSched);