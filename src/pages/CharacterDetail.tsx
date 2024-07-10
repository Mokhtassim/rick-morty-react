import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Character } from "../types";
import axiosInstance from "../axios";
import { Message } from "../components";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    axiosInstance
      .get(`/character/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const theme = useTheme();
  // Detect screen mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return !character ? (
    <Message color="error" text="Not found Character Detail" />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 2,
        marginTop: "4rem",
      }}
    >
      <Card
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
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
