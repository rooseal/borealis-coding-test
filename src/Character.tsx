import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Character } from "./interface";

function CharacterView({ character }: { character: Character }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="400"
        image={character.img}
        title={character.name}
        alt={character.name}
      ></CardMedia>
      <CardContent>
        <Typography variant="subtitle1" component="h2">
          {character.name}
        </Typography>
        <Typography variant="subtitle2" component="h3">
          {character.portrayed}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterView;
