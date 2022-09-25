import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2">React Query</Typography>
      <Typography variant="subtitle1">Using the Star Wars API</Typography>
      <Typography variant="subtitle2">
        (Built by <a href="https://twitter.com/Brent_m_Clark">@Brent_m_Clark</a>
        )
      </Typography>
      <section className={classes.main}>
        <Typography variant="body1">This is Home</Typography>
        <Typography variant="body1">
          check out the {"  "}{" "}
          <Link component={RouterLink} to="/films">
            Films
          </Link>{" "}
          <Link component={RouterLink} to="/characters">
            Characters
          </Link>
        </Typography>
      </section>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "44px 0",
    "& p": {
      margin: "12px 0 24px",
    },
  },
}));
