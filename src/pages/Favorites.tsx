import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import CharacterCard from '../components/CharacterCard'
import { Character } from '../types'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Character[]>([])

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'))
  }, [])

  const toggleFavorite = (character: Character) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== character.id)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <Grid container spacing={2}>
      {favorites.map(character => (
        <Grid item xs={12} sm={6} md={4} key={character.id}>
          <CharacterCard
            character={character}
            isFavorite={true}
            onToggleFavorite={toggleFavorite}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Favorites
