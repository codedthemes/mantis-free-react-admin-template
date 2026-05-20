import PropTypes from 'prop-types';
// material-ui
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

// assets
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';
import NodeExpandOutlined from '@ant-design/icons/NodeExpandOutlined';

export default function ComponentHeader({ title, caption, directory, link }) {
  return (
    <>
      <Stack sx={{ gap: 1.25 }}>
        <Typography variant="h2">{title}</Typography>
        {caption && (
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {caption}
          </Typography>
        )}
      </Stack>
      <Grid container spacing={0.75} sx={{ mt: 2.5 }}>
        {directory && (
          <Grid size={12}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              <NodeExpandOutlined style={{ marginRight: 10 }} />
              {directory}
            </Typography>
          </Grid>
        )}
        {link && (
          <Grid size={12}>
            <Link variant="caption" sx={{ color: 'primary.main' }} href={link} target="_blank">
              <GlobalOutlined style={{ marginRight: 10 }} />
              {link}
            </Link>
          </Grid>
        )}
      </Grid>
    </>
  );
}

ComponentHeader.propTypes = { title: PropTypes.string, caption: PropTypes.string, directory: PropTypes.string, link: PropTypes.string };
