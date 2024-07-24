import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const value = 1

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function CustomizedProgressBars( {value} ) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>

      <br />
      <BorderLinearProgress variant="determinate" value={value} />
    </Stack>
  );
}
