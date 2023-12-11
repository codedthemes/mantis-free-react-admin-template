import { IndicatorColors } from 'utils/DataStatus';
import './epic-card.scss';
import { CrownOutlined } from '@ant-design/icons';

type EpicCardProps = {
  id?: string;
  title?: string;
  status?: string;
};

export const EpicCard = ({ id, title, status }: EpicCardProps) => {
  return (
    <div className="epic-card-container">
      <CrownOutlined style={{ verticalAlign: '-1em', fontSize: '18px', color: IndicatorColors[status ?? 'new'], marginBottom: '4px' }} />
      <div className="epic-card-title">{title}</div>
    </div>
  );
};
