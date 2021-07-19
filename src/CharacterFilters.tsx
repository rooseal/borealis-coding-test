import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";

import {
  Character,
  SortTypeDictionary,
  Filters,
  FilterActions,
} from "./interface";

export const sortTypes: SortTypeDictionary = {
  nameAsc: {
    label: "Character name ascending",
    sortFn: (a: any, b: any) => (a.name <= b.name ? -1 : 1),
  },
  nameDesc: {
    label: "Character name descending",
    sortFn: (a: any, b: any) => (b.name <= a.name ? -1 : 1),
  },
  charAsc: {
    label: "Actor name ascending",
    sortFn: (a: any, b: any) => (a.portrayed <= b.portrayed ? -1 : 1),
  },
  charDesc: {
    label: "Actor name descending",
    sortFn: (a: any, b: any) => (b.portrayed <= a.portrayed ? -1 : 1),
  },
};

export const searchFunction = (list: Character[], searchTerm: string) => {
  const re = new RegExp(`^${searchTerm}|\\s${searchTerm}`, "gi");

  return list.filter((character: Character) => {
    return re.test(character.name) || re.test(character.portrayed);
  });
};

const useStyles = makeStyles((theme) => ({
  input: {
    "&:focus": {
      boxShadow: "none",
      border: "0",
    },
  },
}));

function CharacterFilters({
  filters,
  actions,
}: {
  filters: Filters;
  actions: FilterActions;
}) {
  const classes = useStyles();

  function handleChangeSortType(
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) {
    actions.setSortType(event.target.value as string);
  }

  function handleChangeSearchTerm(
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) {
    actions.setSearchTerm(event.target.value as string);
  }

  return (
    <div>
      <TextField
        value={filters.searchTerm}
        onChange={handleChangeSearchTerm}
        variant="outlined"
        InputProps={{
          classes,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl variant="outlined">
        <Select value={filters.sortType} onChange={handleChangeSortType}>
          {Object.keys(sortTypes).map((sortTypeKey) => (
            <MenuItem key={sortTypeKey} value={sortTypeKey}>
              {sortTypes[sortTypeKey].label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CharacterFilters;
