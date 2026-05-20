import PropTypes from 'prop-types';

// project imports
import DashboardLayout from 'layout/Dashboard';

// ==============================|| COMPONENT - LAYOUT ||============================== //

export default function Layout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

Layout.propTypes = { children: PropTypes.node };
