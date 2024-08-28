import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({title}) {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <TextField
          label={title}
          multiline
          maxRows={4}
          variant="filled"
          sx={{backgroundColor:'white'}}
        />
    </Box>
  );
}