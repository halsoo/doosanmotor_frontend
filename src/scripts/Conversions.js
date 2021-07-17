import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const weekdays = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
}

const numToWeekday = (num) => {
    return weekdays[num]
}

const dateToWeekday = (obj, day) => {
    const year = obj.year()
    const month = digitConv(obj.month() + 1) // .month() => 0~11

    const current = dayjs(`${year}-${month}-${digitConv(day)}`, "YYYY-MM-DD")
    const weekday = current.day()

    return numToWeekday(weekday)
}

const digitConv = (num) => {
    return num < 10 ? `0${num}` : num
}

export {weekdays, numToWeekday, dateToWeekday}