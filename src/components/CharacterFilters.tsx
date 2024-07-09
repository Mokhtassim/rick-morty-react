import React from "react";
import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import SelectComponent from "./SelectComponent";

interface CharacterFiltersProps {
  filter: {
    search: string;
    status: string;
    species: string;
    gender: string;
  };
  onFilterChange: (filterName: string, value: string) => void;
  resetFilter: () => void;
}

const CharacterFilters: React.FC<CharacterFiltersProps> = ({
  filter,
  onFilterChange,
  resetFilter,
}) => {
  const statusOptions = [
    { label: "All", value: "" },
    { label: "Alive", value: "alive" },
    { label: "Dead", value: "dead" },
    { label: "Unknown", value: "unknown" },
  ];

  const speciesOptions = [
    { label: "All", value: "" },
    { label: "Human", value: "human" },
    { label: "Alien", value: "alien" },
  ];

  const genderOptions = [
    { label: "All", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Genderless", value: "genderless" },
    { label: "Unknown", value: "unknown" },
  ];

  const theme = useTheme();
  // Detect if the screen size is small (mobile)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "1rem",
        justifyContent: "space-between",
        marginBottom: 2,
        border: "1px solid gray",
        padding: "2rem",
        borderRadius: "5px",
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        label="Search by name"
        value={filter.search}
        onChange={(e) => onFilterChange('search', e.target.value)}
      />

      <SelectComponent
        label="Status"
        value={filter.status}
        onChange={(value) => onFilterChange('status',value)}
        options={statusOptions}
      />
      <SelectComponent
        label="Species"
        value={filter.species}
        onChange={(value) => onFilterChange('species',value)}
        options={speciesOptions}
      />
      <SelectComponent
        label="Gender"
        value={filter.gender}
        onChange={(value) => onFilterChange('gender',value)}
        options={genderOptions}
      />
      <Button color="info" fullWidth variant="outlined" onClick={resetFilter}>
        Reset Filter
      </Button>
    </Box>
  );
};

export default CharacterFilters;
