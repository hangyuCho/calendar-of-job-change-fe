
import { ScheduleByHolidayProps } from "../../types"
import { isEqualDate } from "../../utils/index"
import holiday from "../../data/holiday.json"

const ScheduleByHoliday = ({targetDate}:ScheduleByHolidayProps) => {

  const holidayItem = 
    holiday
      .items
      .find(el => isEqualDate(new Date(el.start.date), targetDate))

  return (
    <>
      {
        !holidayItem ? <span>{targetDate.getDate()}</span> : (
        <>
          <span className="text-red-500">{targetDate.getDate()}</span>
          <div className="flex justify-start bg-purple-200 rounded-sm border-l-4 border-purple-500 items-center gap-2 text-xs w-full text-purple-500">
            <span className="text-[8px]">{holidayItem.summary}</span>
          </div>
        </>
        )
      }
    </>
  )
}

export default ScheduleByHoliday
