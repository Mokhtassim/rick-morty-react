import React from 'react'
import { Box, Button } from '@mui/material'

interface PaginationProps {
  page: number
  onPageChange: (newPage: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ page, onPageChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <Button variant="outlined" onClick={() => onPageChange(page > 1 ? page - 1 : 1)}>Previous</Button>
      <Button variant="outlined" onClick={() => onPageChange(page + 1)}>Next</Button>
    </Box>
  )
}

export default Pagination
