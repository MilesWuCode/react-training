import React from "react";
import styled from "styled-components";
import {
  Button,
  Grid,
  Paper,
  Avatar,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// styled-components create element with style
const Title = styled.h3`
  color: red;
`;

const NewBtn = styled(Button)`
  background-color: tomato !important;
`;
//

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  btn: {
    backgroundColor: "tomato",
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const ReactRouterDom = () => {
  const classes = useStyles();

  return (
    <div>
      <Title className="text-2xl">React Router Dom</Title>
      <Button variant="contained" color="primary">
        Hello World-1
      </Button>
      <Button variant="contained" color="primary" className={classes.btn}>
        Hello World-2
      </Button>
      <Tooltip title="Delete">
        <NewBtn variant="contained" color="primary">
          Hello World-3
        </NewBtn>
      </Tooltip>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ReactRouterDom;
