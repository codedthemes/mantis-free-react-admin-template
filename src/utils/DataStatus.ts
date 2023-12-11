import dayjs from 'dayjs';

export const GetDateStatus = (date: string, dueDate: string) => {
  const daysUntilDue = dayjs(dayjs(dueDate)).diff(date, 'day');

  return daysUntilDue >= 3
    ? IndicatorColors.new
    : daysUntilDue === 2
    ? IndicatorColors.warning
    : daysUntilDue === 1
    ? IndicatorColors.danger
    : IndicatorColors.pastDue;
};

export type DataStatus = {
  new: 'new';
  warning: 'warning';
  danger: 'danger';
  success: 'success';
};

export const IndicatorColors: Record<string, string> = {
  new: '#00A7FA', // blue
  committed: '#bc85fa', // purple
  active: '#F6A229', // orange
  resolved: '#48EB12', // green
  success: '#48EB12', // green
  warning: '#FFC107', // yellow
  danger: '#FF5252', // red
  pastDue: '#86878a' // grey
};
