import { Box, Breadcrumbs, Typography, Divider, Button } from '@mui/material';
import Image from 'next/image';
import SandWich from '@/images/sandwich.jpg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

import {
  BREADCRUMBS,
  RECIPE_CONTENT,
  RECIPE_CARD_CONTENT_BODY,
  RECIPE_CARD_YIELD,
} from '@/content/recipes';
import InfoCard from '@/components/InfoCard/index';

const _renderBreadCrumb = BREADCRUMBS.map((breadcrumb) => {
  return (
    <Typography
      key={breadcrumb}
      color='text.primary'
      sx={{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '12px',
      }}>
      {breadcrumb}
    </Typography>
  );
});

const _renderInfoCard = () => {
  return RECIPE_CARD_CONTENT_BODY.map((item) => {
    return (
      <InfoCard
        key={item.title}
        title={item.title}
        description={item.description}
        icon={item.icon}
      />
    );
  });
};

const Recipes = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          columnGap: '50px',
        }}>
        {/* Content  */}
        <Box
          sx={{
            maxWidth: '660px',
          }}>
          {/* Breadcrumb  */}
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                fontSize='small'
                sx={{
                  color: '#f74877',
                }}
              />
            }
            aria-label='breadcrumb'>
            {_renderBreadCrumb}
          </Breadcrumbs>

          {/* Title  */}
          <Typography
            variant='h3'
            sx={{
              fontWeight: 'bold',
              marginTop: '25px',
              maxWidth: '475px',
            }}>
            {RECIPE_CONTENT.title}
          </Typography>

          {/* Content  */}
          <Typography
            variant='body1'
            sx={{
              marginTop: '80px',
              color: '#737373',
            }}>
            {RECIPE_CONTENT.content}
          </Typography>

          {/* Info card  */}
          <Box
            sx={{
              display: 'flex',
              columnGap: '15px',
              marginTop: '20px',
            }}>
            {_renderInfoCard()}
          </Box>

          {/* Divide  */}
          <Divider
            sx={{
              marginTop: '30px',
            }}
          />

          {/* Save recipe  */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}>
            <Box
              sx={{
                width: '100%',
              }}>
              <InfoCard
                title={RECIPE_CARD_YIELD.title}
                description={RECIPE_CARD_YIELD.description}
                icon={RECIPE_CARD_YIELD.icon}
              />
            </Box>

            {/* CTA action  */}
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                columnGap: '10px',
                justifyContent: 'flex-end',
              }}>
              <Button
                sx={{
                  border: '2px solid #f74877',
                  color: '#000',
                  fontSize: '12px',
                  height: '40px',
                  fontWeight: 'bold',
                  width: '140px',
                  '&:hover': {
                    border: '2px solid #f74877',
                  },
                }}
                variant='outlined'
                startIcon={<AddOutlinedIcon />}
                size='small'>
                Save recipe
              </Button>
              <Button
                sx={{
                  border: '2px solid #f74877',
                  color: '#000',
                  fontSize: '12px',
                  height: '40px',
                  fontWeight: 'bold',
                  padding: '0',
                  width: '100px',
                  '&:hover': {
                    border: '2px solid #f74877',
                  },
                }}
                variant='outlined'
                size='small'
                startIcon={<LocalPrintshopOutlinedIcon />}>
                Print
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Image  */}
        <Box>
          <Image src={SandWich} height={400} alt='Sandwich' />
        </Box>
      </Box>
    </Box>
  );
};

export default Recipes;
