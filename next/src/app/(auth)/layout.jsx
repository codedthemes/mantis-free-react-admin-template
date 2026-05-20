import PropTypes from 'prop-types';

// ==============================|| AUTH LAYOUT ||============================== //

export default function Layout({ children }) {
  return <>{children}</>;
}

Layout.propTypes = { children: PropTypes.node };
