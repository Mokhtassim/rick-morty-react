import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Character } from "../types";
import {
  CharacterCard,
  CharacterFilters,
  PaginationComponent,
} from "../components";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../axios";

const CharacterList: React.FC = () => {
  const initialFilter = {
    search: "",
    status: "",
    species: "",
    gender: "",
  };
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagination, setPagination] = useState({ page: 1, pageCount: 0 });
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
    setPagination({ ...pagination, page: 1 });
  };
  useEffect(() => {
    const params = new URLSearchParams({
      page: pagination.page.toString(),
      name: filter.search,
      status: filter.status,
      species: filter.species,
      gender: filter.gender,
    }).toString();

    axiosInstance
      .get(`/character/?${params}`)
      .then((res) => {
        setCharacters(res.data.results);
        setPagination((prev) => ({ ...prev, pageCount: res.data.info.pages }));
      })
      .catch((err) => console.log(err));
  }, [pagination.page, filter]);

  const toggleFavorite = (character: Character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination({ ...pagination, page: value });
  };

  return (
    <Box sx={{ padding: "2rem", marginTop: "4rem" }}>
      <CharacterFilters
        filter={filter}
        onFilterChange={handleFilterChange}
        resetFilter={() => {
          setFilter(initialFilter);
          setPagination({ ...pagination, page: 1 });
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
      <PaginationComponent
        count={pagination.pageCount}
        page={pagination.page}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default CharacterList;
