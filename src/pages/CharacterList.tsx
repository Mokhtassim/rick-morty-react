import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { Character } from "../types";
import { CharacterCard, Pagination, CharacterFilters } from "../components";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const CharacterList: React.FC = () => {
  const initialFilter = {
    search: "",
    status: "",
    species: "",
    gender: "",
  };
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(initialFilter);

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const handleFilterChange = (filterName: string, value: string) => {
    setFilter({
      ...filter,
      [filterName]: value,
    });
  };
  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${filter.search}&status=${filter.status}&species=${filter.species}&gender=${filter.gender}`
      )
      .then((res) => setCharacters(res.data.results));
  }, [page, filter]);

  const toggleFavorite = (character: Character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <Box sx={{ padding: "2rem", marginTop: "4rem" }}>
      <CharacterFilters
        filter={filter}
        onFilterChange={handleFilterChange}
        resetFilter={() => {
          setFilter(initialFilter);
        }}
      />
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={3} key={character.id}>
            <CharacterCard
              character={character}
              onToggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination page={page} onPageChange={setPage} />
    </Box>
  );
};

export default CharacterList;
