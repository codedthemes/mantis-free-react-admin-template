// material-ui
import { Typography } from '@mui/material';
import { CustomInput } from 'components/CustomInput';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const FeedbackPage = () => (
  <>
    <MainCard>
      <div>
        <Helmet>
          <script src="//embed.typeform.com/next/embed.js"></script>
        </Helmet>
        <div data-tf-live="01HHBV27R59QXR8G6YV3Y4263R"></div>
      </div>
    </MainCard>
  </>
);

export default FeedbackPage;
