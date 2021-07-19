import React from "react";
import Grid from "@material-ui/core/Grid";

import CharacterCard from "./Character";
import { Character } from "./interface";

function CharacterView({ characters }: { characters: Character[] }) {
  return (
    <Grid container spacing={2}>
      {characters.map((character: Character) => (
        <Grid key={character.name} item xs={12} sm={6} md={4} lg={3}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CharacterView;
