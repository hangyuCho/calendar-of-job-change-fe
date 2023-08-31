import { useState, FC } from "react"

const rowHight = 16 

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
    title: "山の日",
    startAt: new Date("2023-09-11 00:00:00"),
    endAt: new Date("2023-09-11 00:00:00")
  },
  {
    scheduleType: ScheduleType.FIX_TIME,
    title: "ココネ最終面接",
    startAt: new Date("2023-09-11 11:00:00"),
    endAt: new Date("2023-09-11 12:00:00")
  }

]

interface CalendarRowByDaysProps {

}
const CalendarRowByDays:FC = ({}) => {
  return (
    <div className="flex h-16">
      <div className="w-[14.3%] flex justify-center font-bold text-base text-gray-500">30</div>
      <div className="w-[14.3%] flex justify-center font-bold text-base text-gray-500">31</div>
      <div className="w-[14.3%] flex justify-center font-bold text-base">1</div>
      <div className="w-[14.3%] flex justify-center font-bold text-base">2</div>
      <div className="w-[14.3%] flex justify-center font-bold text-base">3</div>
      <div className="w-[14.3%] flex justify-center font-bold text-base">4</div>
      <div className="w-[14.3%] flex justify-center font-bold text-base">5</div>
    </div>
  )
}

const Calendar = () => {
  let [nowMonth, setNowMonth]: [Date, React.Dispatch<React.SetStateAction<Date>>] = useState(new Date())
  let [today, setToday]: [Date, React.Dispatch<React.SetStateAction<Date>>] = useState(new Date())
  let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1)
  let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0)

  let [calYear, setCalYear]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(nowMonth.getFullYear())

  let [calMonth, setCalMonth]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(nowMonth.getFullYear())

  today.setHours(0,0,0,0)

  return (
    <div className="flex justify-center items-center text-gray-200">
      <div className="flex flex-col w-[375px] h-[667px] mt-32 bg-black overflow-scroll">
        <div className="flex justify-between w-full items-center sticky top-0 after:content=[''] after:bg-gray-900 after:opacity-50 after:w-full after:absolute">
          <span className="text-4xl font-bold w-8/12 pl-2">8</span>
          <div className="flex justify-end gap-3 w-4/12 pr-2">
            <span>🔍</span>
            <span>📅</span>
            <span>⚙️</span>
          </div>
        </div>
        <div className="flex flex-col px-2">
          <div className="text-xs">
            <CalendarRowByHead/>
            <div className="flex h-16">
              <div className="w-[14.3%] flex justify-center font-bold text-base text-gray-500">30</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base text-gray-500">31</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">1</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">2</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">3</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">4</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">5</div>
            </div>
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
            <div className="flex h-16">
              <div className="w-[14.3%] flex justify-center font-bold text-base">13</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">14</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">15</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">16</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">17</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">18</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">19</div>
            </div>
            <div className="flex h-16">
              <div className="w-[14.3%] flex justify-center font-bold text-base">20</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">21</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">22</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">23</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">24</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">25</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">26</div>
            </div>
            <div className="flex h-16">
              <div className="w-[14.3%] flex justify-center font-bold text-base">27</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">28</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">29</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base bg-gray-800 rounded-md">30</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base">31</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base text-gray-500">1</div>
              <div className="w-[14.3%] flex justify-center font-bold text-base text-gray-500">2</div>
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
