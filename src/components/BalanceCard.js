import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const balance = 10;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BalanceCard({balance}) {
  return (
    <Card sx={{ minWidth: 275, height: 175 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          今日话费
          {/* <Button size="small" sx>Learn More</Button> */}
        </Typography>
        <Typography variant="h5" component="div">
        <br />
          $ {balance}
        </Typography>
      </CardContent>
    </Card>
  );
}
