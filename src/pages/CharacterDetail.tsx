import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Character } from "../types";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setCharacter(res.data));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 2,
        marginTop: "1rem",
      }}
    >
      <Card sx={{ display: "flex", gap: "1rem" }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{ width: "500px" }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.status} - {character.species} - {character.gender}
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            <span style={{ fontWeight: "bold" }}>Origin Name:</span>{" "}
            {character.origin.name}
          </Typography>
          <Typography variant="body1">
            Location Name: {character.location.name}
          </Typography>
          <Typography variant="body1">
            Number of episodes: {character.episode.length}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CharacterDetail;
