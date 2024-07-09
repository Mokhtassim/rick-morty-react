import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Character } from '../types'

interface CharacterCardProps {
  character: Character
  isFavorite: boolean
  onToggleFavorite: (character: Character) => void
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, isFavorite, onToggleFavorite }) => {
  return (
    <Card>
      <CardMedia component="img" image={character.image} alt={character.name} />
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
          startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
          onClick={() => onToggleFavorite(character)}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default CharacterCard
