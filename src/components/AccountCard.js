import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const balance = 0;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function AccountCard({ balance }) {
  return (
    <Card sx={{ minWidth: 275, height: 175 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          今日新增账号数量
        </Typography>
        <Typography variant="h5" component="div">
        <br />
          {balance}
        </Typography>
      </CardContent>
    </Card>
  );
}

AccountCard.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default AccountCard;
