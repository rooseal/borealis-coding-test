import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import DisplayError from "./DisplayError";
import CharacterList from "./Characters";
import useCharacters from "./useCharacters";
import useFilters from "./useFilters";

import CharacterFilters, {
  searchFunction,
  sortTypes,
} from "./CharacterFilters";

const useStyles = makeStyles({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

function CharacterView() {
  const { characters, error, loading } = useCharacters();
  const { filteredList, actions, filters } = useFilters(characters, {
    sortTypes,
    searchFn: searchFunction,
  });
  const classes = useStyles();

  return loading ? (
    <div className={classes.center}>
      <CircularProgress />
    </div>
  ) : (
    <Box p={3}>
      <DisplayError error={error} />
      <Box mb={2}>
        <CharacterFilters filters={filters} actions={actions} />
      </Box>
      <Grid container spacing={2}>
        <CharacterList characters={filteredList} />
      </Grid>
    </Box>
  );
}

export default CharacterView;
