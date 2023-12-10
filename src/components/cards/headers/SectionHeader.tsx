import './SectionHeader.scss';
import { Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <Typography className="section-header-text" variant="h5">
        {title}
      </Typography>
      {icon && <div className="section-header-icon">{icon}</div>}
    </div>
  );
}
