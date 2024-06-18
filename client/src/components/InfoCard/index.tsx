import React from 'react';
import { Box, Typography } from '@mui/material';

interface InfoCardProperties {
  icon?: any;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProperties) => {
  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: '10px',
        width: '100%',
      }}>
      {/* Icon  */}
      {icon ?? <Box>{icon}</Box>}

      {/* Content  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '5px',
          paddingTop: '5px',
        }}>
        <Typography
          fontWeight='bold'
          fontSize='13px'
          sx={{
            textTransform: 'uppercase',
          }}>
          {title}
        </Typography>
        <Typography fontWeight='bold' fontSize='17px'>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
