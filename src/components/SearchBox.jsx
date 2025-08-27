import React from 'react';
import { TextField } from '@mui/material';

export default function SearchBox({ value, onChange, placeholder = 'Search ...' }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white rounded-md"
    />
  );
}
