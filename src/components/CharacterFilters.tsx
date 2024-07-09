import React from 'react'
import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'

interface CharacterFiltersProps {
  search: string
  status: string
  species: string
  gender: string
  onSearchChange: (value: string) => void
  onStatusChange: (value: string) => void
  onSpeciesChange: (value: string) => void
  onGenderChange: (value: string) => void
}

const CharacterFilters: React.FC<CharacterFiltersProps> = ({
  search,
  status,
  species,
  gender,
  onSearchChange,
  onStatusChange,
  onSpeciesChange,
  onGenderChange
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection:'row',justifyContent: 'space-between', marginBottom: 2 }}>
      <TextField label="Search by name" value={search} onChange={e => onSearchChange(e.target.value)} />
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={e => onStatusChange(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Species</InputLabel>
        <Select value={species} onChange={e => onSpeciesChange(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="human">Human</MenuItem>
          <MenuItem value="alien">Alien</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={e => onGenderChange(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="genderless">Genderless</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default CharacterFilters
