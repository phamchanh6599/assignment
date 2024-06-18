import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';

export const BREADCRUMBS = ['Recipes', 'Bread', 'Quick Bread'];

export const RECIPE_CONTENT = {
  title: 'Whole-Grain Banana Bread',
  content:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
};

export const RECIPE_CARD_CONTENT_BODY = [
  {
    title: 'prep',
    description: '10 mins',
    icon: <AccessTimeOutlinedIcon fontSize='large' />,
  },
  {
    title: 'bake',
    description: '1 hr to 1 hr 15 mins',
    icon: '',
  },
  {
    title: 'total',
    description: '1 hr 10 mins',
    icon: '',
  },
];

export const RECIPE_CARD_YIELD = {
  title: 'yield',
  description: '1 loaf 12 generous servings',
  icon: <GroupWorkOutlinedIcon fontSize='large' />,
};
