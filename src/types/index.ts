
interface CalendarProps {
  date: Date
}

interface CalendarRowByDaysProps {
  currentDate: Date
}

interface ScheduleByHolidayProps {
  targetDate:Date
}

export {
  type CalendarProps,
  type CalendarRowByDaysProps,
  type ScheduleByHolidayProps
};
