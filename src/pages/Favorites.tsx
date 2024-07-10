import React from "react";
import { Grid } from "@mui/material";
import CharacterCard from "../components/CharacterCard";
import { Character } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeFavorite } from "../redux/favoritesSlice";
import { Message } from "../components";

const Favorites: React.FC = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const dispatch = useDispatch();

  const toggleFavorite = (character: Character) => {
    dispatch(removeFavorite(character.id));
  };

  return favorites.length === 0 ? (
    <Message color="info" text="No favorite characters found."/>
  ) : (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "4rem",
        padding: "2rem",
      }}
      marginTop={"4rem"}
    >
      {favorites.map((character) => (
        <Grid item xs={12} sm={6} md={3} key={character.id}>
          <CharacterCard
            character={character}
            onToggleFavorite={toggleFavorite}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Favorites;
