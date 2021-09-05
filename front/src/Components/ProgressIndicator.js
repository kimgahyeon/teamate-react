import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const CircularIndeterminate = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </Container>
  );
};

export default CircularIndeterminate;
