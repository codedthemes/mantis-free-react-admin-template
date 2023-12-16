import './task-card.scss';
import { Box, Grid, Stack, Typography, Chip } from '@mui/material';
import { RightOutlined, ExclamationOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons';
import { IndicatorColors } from 'utils/DataStatus';
import MainCard from 'components/MainCard';
import dayjs from 'dayjs';
import { GetDateStatus } from 'utils/DataStatus';
import { ColumnName } from '../../../Types/Task';

const HandleOnDrag = (e: React.DragEvent, id: string, status: string) => {
  e.dataTransfer.setData('id', id);
  e.dataTransfer.setData('status', status);
};

type TaskCardProps = {
  title?: string;
  status: string;
  id?: string;
  points?: number;
};

const TaskCard = ({ title, status, points, id }: TaskCardProps) => {
  const dueDate = dayjs()
    .add(points ?? 0, 'day')
    .format('MM/DD/YYYY');
  const dateDiff = dayjs(dayjs(dueDate)).diff(dayjs().format('MM/DD/YYYY'), 'day');

  return (
    <MainCard className="card-animation" draggable onDragStart={(e: any) => HandleOnDrag(e, id ?? '', status ?? '')} contentSX={{ p: 2.5 }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="textPrimary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <div className="card-middle">
            <div className="card-status">
              <Typography variant="subtitle2" color="textSecondary">
                {status}
              </Typography>
              <RightOutlined style={{ verticalAlign: '-0.3em', color: IndicatorColors[status], fontSize: '10px', marginLeft: '3px' }} />
            </div>
            <div className="card-points">
              <Typography variant="subtitle2" color="textSecondary">
                points: {points}
              </Typography>
            </div>
          </div>
        </Grid>
      </Stack>
      <Box sx={{ paddingTop: 1 }}>
        {dueDate && status === ColumnName.ACTIVE ? (
          <Grid item>
            <Chip label={`${dueDate}`} size="small" />
            {<ExclamationOutlined style={{ color: GetDateStatus(dayjs().format('MM/DD/YYYY'), dueDate) }} />}
          </Grid>
        ) : (
          <></>
        )}
        {status === ColumnName.RESOLVED ? (
          <div className="card-total">
            {dateDiff >= 0 ? (
              <RiseOutlined
                style={{
                  verticalAlign: '-0.3em',
                  color: IndicatorColors['success'],
                  fontSize: '16px',
                  marginLeft: '3px'
                }}
              />
            ) : (
              <FallOutlined
                style={{
                  verticalAlign: '-0.3em',
                  color: IndicatorColors['danger'],
                  fontSize: '16px',
                  marginLeft: '3px'
                }}
              />
            )}
            {dateDiff}
          </div>
        ) : (
          <></>
        )}
        {/* <Typography variant="caption" color="textSecondary">
          You made an extra{' '}
          <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
            {extra}
          </Typography>{' '}
          this year
        </Typography> */}
      </Box>
    </MainCard>
  );
};

TaskCard.defaultProps = {
  color: 'primary'
};

export default TaskCard;
