import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import Scheduler from './Scheduler';

const collapsibleWidth = 500;

const styles = theme => ({
  root: {
    height: 180,
    [theme.breakpoints.up('md')]: {
      left: window.innerWidth - collapsibleWidth - theme.spacing.unit,
    },
    [theme.breakpoints.down('xs')]: {
      top: '60px',
    },
    position: 'absolute',
    top: '70px',
    display: 'flex',
  },
  rootNoDisplay: {
    display: 'none',
  },
  collapsible: {
    width: collapsibleWidth,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
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
      <div className={checked ? classes.root : classnames(classes.root, classes.rootNoDisplay)}>
        <Collapse in={checked} className={classes.collapsible}>
          <Scheduler />
        </Collapse>
      </div>
    );
  }
}

AddSched.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSched);