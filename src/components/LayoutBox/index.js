import { Box } from '../../../node_modules/@mui/material/index';
import { useTheme } from '@mui/material/styles';

const LayoutBox = ({ children, sx, ...otherProps }) => {
  const theme = useTheme();

  return (
    <Box sx={{ ...sx, borderRadius: theme.shape.borderRadiusBox, boxShadow: theme.shadows[16] }} {...otherProps}>
      {children}
    </Box>
  );
};

export default LayoutBox;
