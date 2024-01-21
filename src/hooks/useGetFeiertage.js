import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const useGetFeiertage = (blShort = 'BB', dateOrYear, workingDays = [1, 2, 3, 4, 5]) => {
  const [feiertage, setFeiertage] = useState(0);
  const [feiertageWochentage, setFeiertageWochentage] = useState(0);
  const yearToUse = dayjs(dateOrYear || undefined).get('year');

  useEffect(() => {
    const fetchIt = async () => {
      const response = await fetch(`https://feiertage-api.de/api/?jahr=${yearToUse}&nur_land=${blShort}`);
      const data = await response.json();
      const holidays = Object.keys(data)?.length || 0;
      const workDayHolidays = Object.values(data).filter((item) => {
        const dayKey = dayjs(item.datum).get('day');
        const isWorkingDay = workingDays.includes(dayKey);

        return isWorkingDay;
      }).length;

      setFeiertageWochentage(workDayHolidays);
      setFeiertage(holidays);
    };

    fetchIt();
  }, [blShort, workingDays, yearToUse]);

  return { feiertage, feiertageWochentage };
};

export default useGetFeiertage;
