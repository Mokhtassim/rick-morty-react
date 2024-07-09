import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Character } from '../types'

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setCharacter(res.data))
  }, [id])

  if (!character) return <div>Loading...</div>

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <Card>
        <CardMedia component="img" image={character.image} alt={character.name} />
        <CardContent>
          <Typography variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.status} - {character.species} - {character.gender}
          </Typography>
          <Typography variant="body1">
            Origin: {character.origin.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CharacterDetail
