import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { withRouter } from "react-router";
import { useQuery } from "react-query";
import fetch from "./fetch";

function Film(props) {
  const filmId = props.match.params.filmId;
  console.log("props", props);
  const { data, status, error } = useQuery(`film-${filmId}`, () =>
    fetch(`https://swapi.dev/api/films/${filmId}/`)
  );

  console.log("data", data);

  if (status === "loading") {
    return <p>loading</p>;
  }

  if (status === "error") {
    return <p>error: {error.message}</p>;
  }

  if (data === null) {
    return <p>loading</p>;
  }

  return (
    <div>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body1">{data.open_crawl}</Typography>
      <br />
      <Typography variant="h4">Characters</Typography>
      {data.characters.map((character) => {
        const characterUrlParts = character.split("/").filter((el) => el);
        const characterId = characterUrlParts[characterUrlParts.length - 1];
        return <Character id={characterId} key={characterId} />;
      })}
    </div>
  );
}

function Character(props) {
  const { id } = props;
  const { data, status, error } = useQuery(`character-${id}`, () =>
    fetch(`https://swapi.dev/api/people/${props.id}/`)
  );

  if (status !== "success") {
    return null;
  }

  return (
    <article key={id}>
      <Link component={RouterLink} to={`/characters/${id}`}>
        <Typography variant="h6">{data.name}</Typography>
      </Link>
    </article>
  );
}

export default withRouter(Film);
