import { Button, Stack, Typography, useTheme, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { darken } from '@mui/material/styles';

const TextTeaserCard = ({ primaryText, prefixText, link, color, icon, children, light, grow, ratio, textAlign }) => {
  const theme = useTheme();
  const textColor = light ? theme.palette.text.primary : theme.palette.common.white;
  const textColorHover = textColor;
  const bgColor = `linear-gradient(to right, ${color}, ${darken(color, 0.15)})`;

  const OuterComponent = link ? Button : Box;

  return (
    <OuterComponent
      component={link && Link}
      to={link && link}
      sx={{
        aspectRatio: ratio,
        width: '100%',
        height: grow && '100%',
        flexGrow: grow && '1',
        background: bgColor,
        color: textColor,
        padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
        borderRadius: theme.shape.borderRadiusBox,
        transition: '.25s',
        justifyContent: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        '&:after': link && {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '0',
          height: '1000%',
          width: '75%',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.25) 80%, rgba(255,255,255,0.3) 100%)',
          transform: 'rotate(20deg) translateY(-50%) translateX(-120%)',
          transformOrigin: 'top right',
          transition: '.25s',
          opacity: '.25',
          pointerEvents: 'none'
        },
        '&:hover': {
          color: textColorHover,
          boxShadow: theme.shadows[8],

          '&:after': link && {
            transform: 'rotate(20deg) translateY(-50%) translateX(-15%)'
          }
        }
      }}
    >
      <Stack direction="column" textAlign={textAlign || 'left'} spacing={1} sx={{ width: '100%' }}>
        {/* <Icon sx={{ fontSize: { xs: 32, md: 32, lg: 40 }, color: textColor }} /> */}
        <Typography
          paragraph
          sx={{
            fontSize: 24,
            lineHeight: '1em',
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightBoldest,
            margin: '0px',
            color: textColor
          }}
        >
          {prefixText}
        </Typography>
        <Typography
          paragraph
          sx={{
            fontSize: 44,
            lineHeight: '1em',
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightLight,
            margin: '0px',
            color: textColor
          }}
        >
          {primaryText}
        </Typography>
        {children}
      </Stack>
    </OuterComponent>
  );
};

export default TextTeaserCard;
