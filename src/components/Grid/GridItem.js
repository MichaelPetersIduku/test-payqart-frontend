import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


export default function GridItem(props) {
  const { children, className, backgroundColor, ...rest } = props;
  const styles = {
    grid: {
      position: "relative",
      width: "100%",
      minHeight: "100%",
      paddingRight: "15px",
      paddingLeft: "15px",
      flexBasis: "auto",
      backgroundColor
    }
  };
  
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};