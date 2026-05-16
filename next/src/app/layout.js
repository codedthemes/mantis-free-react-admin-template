import 'assets/style.css';
import 'simplebar-react/dist/simplebar.min.css';
import 'assets/third-party/apex-chart.css';
import 'assets/third-party/react-table.css';

import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

import { ConfigProvider } from 'contexts/ConfigContext';
import ThemeRegistry from 'components/ThemeRegistry/ThemeRegistry';
import ScrollTop from 'components/ScrollTop';

export const metadata = {
  title: 'Mantis React Admin Dashboard Template',
  description: 'Start your next React project with the Mantis admin template. It is built with ReactJS, Material-UI, NextJS, and SWR for faster web development.',
  keywords: 'react admin template, material-ui react dashboard template, reactjs admin template, reactjs dashboard, react backend template',
  author: 'CodedThemes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider>
          <ThemeRegistry>
            <ScrollTop>
              {children}
            </ScrollTop>
          </ThemeRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
