
import { FC, useState } from "react"

const today = new Date()
today.setHours(0,0,0,0)

const CalendarRowByHead:FC = ()  => {
  return (
    <div className="flex">
      <div className="w-[14.3%] flex justify-center">日</div>
      <div className="w-[14.3%] flex justify-center">月</div>
      <div className="w-[14.3%] flex justify-center">火</div>
      <div className="w-[14.3%] flex justify-center">水</div>
      <div className="w-[14.3%] flex justify-center">木</div>
      <div className="w-[14.3%] flex justify-center">金</div>
      <div className="w-[14.3%] flex justify-center">土</div>
    </div>
  )
}

enum ScheduleType {
  ALL_TIME = "allTime",
  FIX_TIME = "fixTime"
}

interface ScheduleProps {
  scheduleType: ScheduleType
  title: string
  startAt: Date
  endAt: Date
}

const scheduleList:Array<ScheduleProps> = [
  {
    scheduleType: ScheduleType.ALL_TIME,
    title: "敬老の日",
    startAt: new Date("2023-09-18 00:00:00"),
    endAt: new Date("2023-09-18 00:00:00")
  },
  {
    scheduleType: ScheduleType.FIX_TIME,
    title: "ココネ最終面接",
    startAt: new Date("2023-09-11 11:00:00"),
    endAt: new Date("2023-09-11 12:00:00")
  },
  {
    scheduleType: ScheduleType.FIX_TIME,
    title: "旅行",
    startAt: new Date("2023-09-16 13:00:00"),
    endAt: new Date("2023-09-19 15:00:00")
  }
]



const isToday = (current: Date) => {
  return current.getFullYear() == today.getFullYear()
      && current.getMonth() == today.getMonth()
      && current.getDate() == today.getDate()
}

interface CalendarRowByDaysProps {
  currentDate: Date
}

const CalendarRowByDays = ({currentDate}: CalendarRowByDaysProps) => {
  let nowMonth:Date = currentDate
  let firstDate:Date = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1)
  let lastDate:Date = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0)
  let days:Array<number> = []
  let weeks:Array<Array<number>> = []
  let week: number[] = new Array(7)
  let idx = 0

  for (let now:Date = firstDate; now.getTime() <= lastDate.getTime(); now.setDate(now.getDate() + 1)) {
    idx++
    days.push(now.getTime())
  }
  days
    .forEach((time:number) => {
      let now = new Date(time)
      week[now.getDay()] = time
      if (now.getDay() == 6) {
        weeks.push(week)
        week = new Array(7)
      } else if (days.length ==  now.getDate()) {
        weeks.push(week)
      }
  })
  //return weeks
  let result = weeks.map((week, index) => {
    let style = "w-[14.3%] flex justify-center font-bold text-base"
    idx = 0
    let columns:any[] = []
    for (let day of [0,1,2,3,4,5,6]) {
      let time = week[day]
      let now = new Date(time)
      let currentDateIsToday = isToday(now) ? "bg-gray-800 rounded-md": null
      const onClickHandler = (now:Date) => {
        console.log(now.getDate())
      }
      columns.push(
              time ? <button 
                        type="button" 
                        key={idx++} 
                        onClick={() => onClickHandler(now)}
                        className={`${style} ${currentDateIsToday}`}>
                        {now.getDate()}
                      </button>
                    : <button 
                        type="button" 
                        key={idx++} 
                        className={`${style} text-gray-500`}>
                        0
                      </button>
      )
    }
    return (
      <div className="flex h-16" key={index}>
        { columns.map((column) => column) }
      </div>
    )
  }) 
  return (
    <>
      {result}
    </>
  )
}

const Calendar = () => {
  let [currentDate, setCurrentDate] = useState(new Date())

  const onPrevMonth = () => {
    let prevMonthDate:Date = new Date(currentDate.getTime())
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1)
    setCurrentDate(prevMonthDate)
  }

  const onNextMonth = () => {
    let nextMonthDate:Date = new Date(currentDate.getTime())
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)
    setCurrentDate(nextMonthDate)
  }
  return (
    <div className="flex flex-col justify-center items-center text-gray-200">
      <div className="flex flex-col justify-start w-[375px] h-[667px] mt-32 bg-black overflow-scroll">
        <div className="flex justify-around bg-indigo-300 text-black">
          <button type="button" onClick={() => onPrevMonth() } className="border px-2 py-1 rounded-md bg-rose-400">←</button>
          <button type="button" onClick={() => onNextMonth() } className="border px-2 py-1 rounded-md bg-rose-400">→</button>
        </div>
        <div className="flex justify-between w-full h-32 items-center sticky top-0 after:content=[''] after:bg-gray-900 after:opacity-50 after:w-full after:absolute">
          <span className="text-4xl font-bold w-8/12 pl-6">{currentDate.getMonth()+1}</span>
          <span className="text-2xl font-bold w-8/12 pl-6 text-gray-700">{currentDate.getFullYear()}</span>
          <div className="flex justify-end gap-3 w-4/12 pr-2">
            <span>🔍</span>
            <span>📅</span>
            <span>⚙️</span>
          </div>
        </div>
        <div className="flex flex-col px-2">
          <div className="text-xs">
            <CalendarRowByHead/>
            <CalendarRowByDays currentDate={currentDate}/>
            <div className="flex h-16">
              <div className="w-[14.3%] flex justify-center font-bold text-base">6</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">7</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">8</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">9</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">10</div>
              <div className="w-[14.3%] flex flex-col justify-start items-center font-bold text-base text-red-500 bg-gray-300 rounded-md">
                <span>11</span>
                <div className="flex justify-start bg-purple-200 rounded-sm border-l-4 border-purple-500 items-center gap-2 text-xs w-full text-purple-500">
                  <span className="">山の日</span>
                </div>
              </div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">12</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-2">
          <div className="flex gap-2">
            <span>2023年8月30日(水)</span>
            <span className="text-gray-600">7月15日</span>
          </div>
          <div className="flex flex-col mt-2 gap-2">
            <div className="flex text-base">
              <button type="button" className="flex justify-start bg-gray-800 px-4 py-2 rounded-md w-full items-center gap-2">
                <span className="text-base">終日</span>
                <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                <span className="text-base">山の日</span>
              </button>
            </div>
            <div className="flex text-base gap-2 items-center">
              <button type="button" className="flex justify-start bg-gray-800 px-4 py-2 rounded-md w-10/12">
                <span className="text-base">+ 新しいイベント</span>
              </button>
              <button type="button" className="flex justify-center bg-gray-800 px-4 py-2 rounded-md w-2/12">
                <span>⚙️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
