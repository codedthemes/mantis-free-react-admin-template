import PropTypes from 'prop-types';

// project imports
import { ConfigProvider } from 'contexts/ConfigContext';
import ScrollTop from 'components/ScrollTop';
import ThemeCustomization from '../../themes';

// ==============================|| PROVIDER WRAPPER ||============================== //

export default function ProviderWrapper({ children }) {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <ScrollTop>{children}</ScrollTop>
      </ThemeCustomization>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.node };
