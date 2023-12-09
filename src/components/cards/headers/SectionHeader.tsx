import './SectionHeader.scss';
import { Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <Typography className="section-header" variant="h5">
      {title}
    </Typography>
  );
}
