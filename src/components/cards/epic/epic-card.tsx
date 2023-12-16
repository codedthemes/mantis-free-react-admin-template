import { IndicatorColors } from 'utils/DataStatus';
import './epic-card.scss';
import { CrownOutlined } from '@ant-design/icons';
import { Epic, EpicStatus } from 'Types/Epic';

type EpicCardProps = {
  epic: Epic;
};

export const EpicCard = ({ epic }: EpicCardProps) => {
  return (
    <div className="epic-card-container">
      <CrownOutlined
        style={{
          verticalAlign: '-1em',
          fontSize: '18px',
          color: IndicatorColors[epic.status ?? EpicStatus.IN_PROGRESS],
          marginBottom: '4px'
        }}
      />
      <div className="epic-card-title">{epic.title}</div>
    </div>
  );
};
