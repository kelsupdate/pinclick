import React from 'react';
import { Input, FormControl, FormLabel } from '@mui/material';

const NeonInput = ({ label, type = 'text', fullWidth = true, ...props }) => {
  return (
    <FormControl fullWidth={fullWidth} sx={{ marginBottom: 2 }}>
      <FormLabel sx={{ 
        color: '#0070b1ff',
        '&.Mui-focused': {
          color: '#00c3ffff',
        },
      }}>
        {label}
      </FormLabel>
      <Input
        type={type}
        sx={{
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          border: '2px solid #0061b1ff',
          borderRadius: 1,
          '&:hover': {
            borderColor: '#008cffff',
          },
          '&.Mui-focused': {
            borderColor: '#00aeffff',
            boxShadow: '0 0 15px rgba(0, 183, 255, 0.5)',
          },
          '& input': {
            color: '#ffffff',
            padding: '12px 14px',
          },
        }}
        {...props}
      />
    </FormControl>
  );
};

export default NeonInput;
