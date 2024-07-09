import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Character } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface CharacterCardProps {
  character: Character;
  onToggleFavorite: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onToggleFavorite,
}) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const isFavorite = (id: number) => favorites.some((fav) => fav.id === id);
  return (
    <Card>
      <IconButton
        sx={{ position: "absolute" }}
        onClick={() => onToggleFavorite(character)}
      >
        {isFavorite(character.id) ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>
      <Link to={`/character/${character.id}`}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
        />
      </Link>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={`/character/${character.id}`}>{character.name}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.status} - {character.species} - {character.gender}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={isFavorite(character.id) ? <Favorite /> : <FavoriteBorder />}
          onClick={() => onToggleFavorite(character)}
        >
          {isFavorite(character.id) ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
