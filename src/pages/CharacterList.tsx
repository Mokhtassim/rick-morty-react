import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { Character } from "../types";
import { CharacterCard, Pagination, CharacterFilters } from "../components";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`
      )
      .then((res) => setCharacters(res.data.results));
  }, [page, search, status, species, gender]);

  const toggleFavorite = (character: Character) => {
    let favorites: Character[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (favorites.find((fav) => fav.id === character.id)) {
      favorites = favorites.filter((fav) => fav.id !== character.id);
    } else {
      favorites.push(character);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const isFavorite = (character: Character) => {
    const favorites: Character[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    return favorites.some((fav) => fav.id === character.id);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <CharacterFilters
        search={search}
        status={status}
        species={species}
        gender={gender}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onSpeciesChange={setSpecies}
        onGenderChange={setGender}
      />
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard
              character={character}
              isFavorite={isFavorite(character)}
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
