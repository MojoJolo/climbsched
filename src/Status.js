import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  card: {
    marginTop: 10,
  },
  cardContent: {
    paddingBottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
  },
  status: {
    marginTop: 10,
    // marginLeft: 20,
    fontSize: 16,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
  },
  moreButtonText: {
    fontSize: 12,
  },
  moreButton: {
    marginLeft: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actions: {
    display: 'flex',
    paddingTop: 0,
  },
  button: {
    marginTop: theme.spacing.unit,
    // margin: theme.spacing.unit,
    textTransform: "none",
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
});

class Status extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} variant="h1" color="textPrimary">
              Atimonan
            </Typography>
            <Typography className={classes.date} color="textSecondary" variant="subtitle1">
              May 25, 2019
            </Typography>
            <Typography className={classes.status} color="textPrimary" variant="body1">
              <PersonIcon /> 1 person/s
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="contained" size="small" color="primary" className={classes.button}>
              View calendar
            </Button>
            <IconButton className={classes.moreButton}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <Typography className={classes.moreButtonText} variant="display3" color="textSecondary">
                See next 7 days
              </Typography>
              <ExpandMoreIcon className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}/>
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardMedia
              className={classes.media}
              image="jep.jpg"
              title="Paella dish"
            />
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} variant="h1" color="textPrimary">
              Montalban
            </Typography>
            <Typography className={classes.date} color="textSecondary" variant="subtitle1">
              May 25, 2019
            </Typography>
            <Typography className={classes.status} color="textPrimary" variant="body1">
              <PersonIcon /> 10 person/s
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="contained" size="small" color="primary" className={classes.button}>
              View calendar
            </Button>
            <IconButton className={classes.moreButton}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <Typography className={classes.moreButtonText} variant="display3" color="textSecondary">
                See next 7 days
              </Typography>
              <ExpandMoreIcon className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}/>
            </IconButton>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

Status.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Status);