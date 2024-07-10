import React from 'react';
import { Pagination, Box } from '@mui/material';

interface PaginationComponentProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ count, page, onChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
      />
    </Box>
  );
};

export default PaginationComponent;
