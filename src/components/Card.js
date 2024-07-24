import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import FloatingActionButtonZoom from './FloatingButton'
import BasicSelect from './Picker';
import CommonlyUsedComponents from './DatePicker';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, height: 375 }}>
      <CardContent>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={10}>
            <FloatingActionButtonZoom />
          </Grid>
          <Grid item xs={6}>
            {/* <BasicSelect /> */}
            <CommonlyUsedComponents />
          </Grid>
        </Grid>        
      </CardContent>
    </Card>
  );
}
